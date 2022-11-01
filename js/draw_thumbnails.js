import {getUserDescription} from './data.js';


const userPicturesContainer = document.querySelector('.pictures');

const userPicturesTemplate = document.querySelector('#picture')
  .content;
const userPosts = getUserDescription();

const PicturesFragment = document.createDocumentFragment();

userPosts.forEach(({url, likes, comments}) => {

  const pictureElement = userPicturesTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  PicturesFragment.append(pictureElement);
});

userPicturesContainer.append(PicturesFragment);

