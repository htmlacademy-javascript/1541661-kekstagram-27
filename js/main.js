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
  'В целом всё неплохо. Но не всё.'
];

const SIMILAR_OBJECTS_COUNT = 25;
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createUserDescription = (id, url) => ({
  id: id,
  url: `photos/${url}.jpg`,
  description: 'Красивая фотография',
  likes: getRandomPositiveInteger(15,200),
  message: `${getRandomArrayElement(COMMENTS)}`,
  commentId: `${String(Date.now()) + Math.floor(Math.random() * 10000)}`,
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  name: `${getRandomArrayElement(NAMES) }`
});


const similarUserDescription = [];
for (let i = 1; i <= SIMILAR_OBJECTS_COUNT; i++) {
  similarUserDescription.push(createUserDescription(i,i));
  createUserDescription.id = i;
  createUserDescription.url = i;
}
