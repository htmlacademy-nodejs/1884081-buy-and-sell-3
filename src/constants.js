'use strict';

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const PICTURE_NAME = `item`;
const DEFAULT_PORT = 3000;
const FILENAME = `mocks.json`;

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

const TITLES = [
  `Продам книги Стивена Кинга`,
  `Продам новую приставку Sony Playstation 5`,
  `Продам отличную подборку фильмов на VHS`,
  `Куплю антиквариат`,
  `Куплю породистого кота`,
];
const FILE_PATH_SENTENCES = `./data/sentences.txt`;
const FILE_PATH_TITLES = `./data/titles.txt`;
const FILE_PATH_CATEGORIES = `./data/categories.txt`;



const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};


const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const USER_ARGV_INDEX = 2;

const DEFAULT_COMMAND = '--help';

const ExitCode = {
    success: 0,
    error: 1 , 
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16,
};

module.exports = {
    DEFAULT_COUNT,
    FILE_NAME,
    OfferType,
    SumRestrict,
    PictureRestrict,
    USER_ARGV_INDEX,
    DEFAULT_COMMAND,
    PICTURE_NAME,
    ExitCode,
    DEFAULT_PORT,
    FILENAME,
    HttpCode,
    FILE_PATH_SENTENCES,
    FILE_PATH_TITLES,
    FILE_PATH_CATEGORIES
  };