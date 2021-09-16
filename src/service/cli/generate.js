'use strict';

const {
    getPictureFileName,
    getRandomInt,
    shuffle,
  } = require(`../../utils`);

// Подключаем модуль `fs`
const fs = require(`fs`).promises;

const chalk = require(`chalk`);

const { 
    CATEGORIES,
    SENTENCES,
    TITLES,
    PictureRestrict,
    OfferType,
    SumRestrict,
    DEFAULT_COUNT,
    FILE_NAME,
    ExitCode,
  } = require(`../../constants`);
  

const generateOffers = (count) => (
    Array(count).fill({}).map(() => ({
      category: [CATEGORIES.slice(getRandomInt(0, CATEGORIES.length - 1))],
      description: shuffle(SENTENCES).slice(1, 5).join(` `),
      picture: getPictureFileName(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      type: OfferType[Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)]],
      sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
    }))
  );

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;

    if ( countOffer > 1000 ) {
         console.error(chalk.red(`Не больше 1000 объявлений`));
         return  process.exit(ExitCode.error);
    }

    const content = JSON.stringify(generateOffers(countOffer));


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
