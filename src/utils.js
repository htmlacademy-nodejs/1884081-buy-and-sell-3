'use strict';

/**
 * Перетасовка массива по алгоритму
 * Фишера—Йетса.
 *
 * Функция возвращает новый массив
 *
 * @param {Array} array
 * @return {Array}
 */
const shuffle = (array) => {
  const resultArray = array.slice();
  for (let i = resultArray.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    [resultArray[randomNumber], resultArray[i]] = [resultArray[i], resultArray[randomNumber]];
  }

  return resultArray;
};

/**
 * Возвращает случайное число в диапазоне
 * `min` и `max`.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Генерит имя картинки в  
 *
 * @param {Number} index
 * @return {String}
 */
 const getPictureFileName = (index) => {
  if (index < 10){ index = '0'+index }
  var result = 'item'+ index + '.jpg'
  console.log(result)
  return result
};

module.exports = {
    getPictureFileName,
    getRandomInt,
    shuffle,
  };