'use strict';

const {
    getPictureFileName,
    getRandomInt,
    shuffle,
    readContent,
  } = require(`../../utils`);

// Подключаем модуль `fs`
const fs = require(`fs`).promises;

const chalk = require(`chalk`);

const { 
    FILE_PATH_SENTENCES,
    FILE_PATH_TITLES,
    FILE_PATH_CATEGORIES,
    PictureRestrict,
    OfferType,
    SumRestrict,
    DEFAULT_COUNT,
    FILE_NAME,
    ExitCode,
  } = require(`../../constants`);
  

const generateOffers = (count, sentences, titles, categories) => (
    Array(count).fill({}).map(() => ({
      category: [categories.slice(getRandomInt(0, categories.length - 1))],
      description: shuffle(sentences).slice(1, 5).join(` `),
      picture: getPictureFileName(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
      title: titles[getRandomInt(0, titles.length - 1)],
      type: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
      sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
    }))
  );

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;

    console.log(FILE_PATH_SENTENCES)
    const sentences = await readContent(FILE_PATH_SENTENCES)
    const titles = await readContent(FILE_PATH_TITLES)
    const categories = await readContent(FILE_PATH_CATEGORIES)

    if ( countOffer > 1000 ) {
         console.error(chalk.red(`Не больше 1000 объявлений`));
         return  process.exit(ExitCode.error);
    }

    const content = JSON.stringify(generateOffers(countOffer, sentences, titles, categories));


try {
  await fs.writeFile(FILE_NAME, content);
  console.log(chalk.green(`Operation success. File created.`));
} catch (err) {
  console.error(chalk.red(`Can't write data to file...`));
}

    // fs.writeFile(FILE_NAME, content, (err) => {
    //     if (err) {
    //        console.error(chalk.red(`Can't write data to file...`));
    //        return  process.exit(ExitCode.error);
    //     }
      
    //     console.info(chalk.green(`Operation success. File created.`));
    //    return process.exit(ExitCode.success);
    //   });
  }
}
