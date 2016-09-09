var doWork = function(){
  const MAX_SIZE = 10;
  let x = 1;
  // MAX_SIZE = 12;
  var doAnotherwork = function(){
    // let MAX_SIZE = 12;     // MAX_SIZE is allready defined error
    // console.log(MAX_SIZE);
    let x = 2;
    return x;
  }
  console.log('another workd :',doAnotherwork());
  console.log('do workd :',x);
  // console.log(MAX_SIZE);
}
doWork();
