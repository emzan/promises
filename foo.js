var wereDone = function(){
  console.log('done');
}


var doesLotOfStuff = function(){
  setTimeout(wereDone,3000);
}

console.log('s');
doesLotOfStuff();
console.log('z');
