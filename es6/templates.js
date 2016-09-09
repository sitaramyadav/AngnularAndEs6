let upper = function(strings, ...values){
  let result = '';
  console.log('strings is :',strings);
  console.log('values is  :',values);
  for (var i = 0; i < strings.length; i++){
    result += strings[i];
    if(i < values.length){
      result += values[i];
    }
  }
  return result.toUpperCase();
}
var x = 1;
var y = 2;
var z = 3;

var result = upper `${x} + ${y} is ${x+y}`;
console.log('result is : ',result);
