//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max || min > max) {
    return NaN;}

  else if(min >= 0 && max >= 0){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  else {
    return NaN;
  }
}
getRandomIntInclusive(0,-2);

function checkMaxLengthOfString(checkString, maxLength) {
  if(checkString.length <= maxLength){
    return true;
  }

  else{
    return false;
  }
}
checkMaxLengthOfString('Привет, мир!', 140);
