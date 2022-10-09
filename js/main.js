function getRandomIntInclusive(min, max) {//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(1,5);

function checkMaxLengthOfString(checkString, maxLength) {
  if(checkString.length < maxLength){
    return true;
  }

  else{
    return false;
  }
}
checkMaxLengthOfString('Привет, мир!', 140);
