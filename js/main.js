// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  // Если переданы отрицительные числа, возвращаем NaN
  if (a < 0 || b < 0) {
    return NaN;
  }

  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('privet', 6);

const AVATARS_COUNT = 6;
const SIMILAR_OBJECTS_COUNT = 25;
const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const NAMES = [
  'Иван',
  'Дмитрий',
  'Мария',
  'Диана',
  'Виктор',
  'Юлия',
  'Василий',
  'Пётр'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRTIPTIONS = [
  'Красивая фотография!',
  'Отличное фото!',
  'Замечательно!',
  'Идеально!',
];

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//Took from 4.18. Лайв «Ретроспектива. Структуры данных и встроенные API»
const createMessage = () => Array.from({length: getRandomPositiveInteger(1,2)}, () =>
  getRandomArrayElement(COMMENTS))
  .join(' ');

const createComment = () => ({
  id: `${String(Date.now()) + Math.floor(Math.random() * 10000)}`,
  avatar: `img/avatar-${getRandomPositiveInteger(1,AVATARS_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createUserDescription = (id, url) => ({
  id: id,
  url: `photos/${url}.jpg`,
  description: getRandomArrayElement(DESCRTIPTIONS),
  likes: getRandomPositiveInteger(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: createComment()
});


const getUserDescription = [];
for (let i = 1; i <= SIMILAR_OBJECTS_COUNT; i++) {
  getUserDescription.push(createUserDescription(i,i));
  createUserDescription.id = i;
  createUserDescription.url = i;
}
