function getRandomPositiveInteger (a, b) {

  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

const AVATARS_COUNT = {
  MIN: 1,
  MAX: 6
};

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const SIMILAR_OBJECTS_COUNT = 25;

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

const createMessage = () => Array.from({length: getRandomPositiveInteger(1,2)}, () =>
  getRandomArrayElement(COMMENTS))
  .join(' ');

const createComments = () => ({
  id: `${Date.now() + Math.floor(Math.random() * 10000)}`,
  avatar: `img/avatar-${getRandomPositiveInteger(AVATARS_COUNT.MIN,AVATARS_COUNT.MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createUserDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRTIPTIONS),
  likes: getRandomPositiveInteger(LIKES_COUNT.MIN, LIKES_COUNT.MAX),
  comments: Array.from({
    length: getRandomPositiveInteger(1,5)}, () =>
    createComments())
});

const getUserDescription = () => {
  const userDescription = [];
  for (let i = 1; i <= SIMILAR_OBJECTS_COUNT; i++) {
    userDescription.push(createUserDescription(i));
  }
  return userDescription;
};

getUserDescription();

