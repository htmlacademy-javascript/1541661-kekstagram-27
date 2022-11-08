import {getUserPosts} from './data.js';
import {showBigPicture} from './big-picture.js';

const userPicturesContainer = document.querySelector('.pictures');
const userPicturesTemplate = document.querySelector('#picture').content
  .querySelector('.picture');

const userPosts = getUserPosts();
const picturesFragment = document.createDocumentFragment();

const createUserPhoto = (post) => {
  const element = userPicturesTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = post.url;
  element.querySelector('.picture__likes').textContent = post.likes;
  element.querySelector('.picture__comments').textContent = post.comments.length;
  element.addEventListener('click', () => {
    showBigPicture(post);
  });
  picturesFragment.appendChild(element);
};


const renderUserPhotos = () => {
  userPosts.forEach((post) => {
    createUserPhoto(post);
  });
  return userPicturesContainer.appendChild(picturesFragment);
};

export {renderUserPhotos};
