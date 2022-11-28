import {isEscapeKey} from './util.js';

const MAX_STRING_LENGTH = 140;
const HASHTAGS_QUANTITY = 5;
const imgUploadField = document.querySelector('#upload-file');
const editPhoto = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const buttonCancel = document.querySelector('.img-upload__cancel');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const body = document.querySelector('body');
const hashtagsField = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');
const regExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;


const checkCommentsLength = (value) => value.length <= MAX_STRING_LENGTH;
const getHashtags = (string) => string.split(' ').filter((item) => item !== '');


const getUniqueHashtags = (string) => {
  const hashtags = getHashtags(string);
  const uniqueSet = new Set(hashtags);
  return hashtags.length === uniqueSet.size;
};

const checkQuantity = (string) => getHashtags(string).length <= HASHTAGS_QUANTITY;

const getHashtagsToLowerCase = (string) => {
  const hashtags = getHashtags(string);
  return hashtags.map((element) => element.toLowerCase());
};


const checkHashtagsSymbols = (string) => {
  const hashtags = getHashtags(string);
  return hashtags.every((element) => regExp.test(element));
};


const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPopup();
  }
};

const onPopupCloseButtonClick = () => {
  closeUploadPopup ();
};

function closeUploadPopup () {
  editPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', onPopupCloseButtonClick);
  form.reset();
}

const showUploadPopup = (evt) => {
  imgPreview.src = URL.createObjectURL(evt.target.files[0]);
  editPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  buttonCancel.addEventListener('click', onPopupCloseButtonClick);
  document.addEventListener('keydown',onPopupEscKeydown);
};


const pristine = new Pristine(form, {
  classTo: 'text',
  errorClass: 'text--invalid',
  successClass: 'text-valid',
  errorTextParent: 'text',
  errorTextTag: 'div',
  errorTextClass: 'text__error'
});

const validateForm = () => {
  pristine.addValidator(commentsField, checkCommentsLength, `Не более ${MAX_STRING_LENGTH} символов`);
  pristine.addValidator(hashtagsField, getUniqueHashtags, 'Хэштеги не могут повторяться');
  pristine.addValidator(hashtagsField, checkQuantity, 'Не более 5 хэштегов');
  pristine.addValidator(hashtagsField, getHashtagsToLowerCase, '');
  pristine.addValidator(hashtagsField, checkHashtagsSymbols, 'Хэштег должен начинатьтся с #, содержать только буквы и цифры, не более 20 символов');
  form.addEventListener('submit', (evt) => {
    if (!pristine.validate()) {
      evt.preventDefault();
    }
  });
};

imgUploadField.addEventListener('change', showUploadPopup);
validateForm();

