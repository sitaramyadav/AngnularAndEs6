let sum = function() {
  let result = 0;
  for(let i = 0; i <arguments.length; i ++){
    result += arguments[i];
  }
  return result;
}
let result = sum(1,2,3,4);
console.log('result is :',result);
