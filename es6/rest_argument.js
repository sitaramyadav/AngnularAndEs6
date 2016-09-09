let doWork = function(name, ...numbers){
  let result = 0;
  numbers.forEach(function(n){
    result +=n;
  });
  return result;
}
let _result = doWork('Raju',1,2,3);
console.log('result is :',_result);
