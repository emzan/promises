var doYi = function(){
  var x = 7;

  return function(n){
    return x + n;
  }

}
var eraOra = doYi()
console.log(eraOra(8))
console.dir(eraOra)




let doEat () => {

  let x = 8;

  return (n) => {
    return n + x
  }



}
let salami = doEat()
console.log(salami(7))
console.dir(salami)




function countApples(Jones, Bob){

  return Jones + Bob;
}


console.log(countApples(2, 3))



var doSomething = function(){
  var x = 5;

  return function(n){
    return n + x;
  }
}

var returnedF = doSomething()

console.log(returnedF(8))
console.dir(returnedF)


var wereDone = function(){
  console.log('done!')
}

var doesLotsOfStuff = function(){
  setTimeout(function(){
    console.log('done!')
  }, 3000)
}

console.log('a')
doesLotsOfStuff()
console.log('b')





var myPromise = Promise.resolve('Foo')


myPromise.then((res) => console.log(res))



var myPromise = new Promise(function(resolve, reject){
  setTimeout(() => resolve(4), 2000);
});

myPromise.then((res) => {
  res +=3;
  console.log(res);
});





function getData(method, url){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
      if(this.status >= 200 && this.status < 300){
      resolve(xhr.response);
    }else{
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    }
  };
  xhr.onerror = function(){
    reject({
      status: this.status,
      statusText: xhr.statusText
    });
  };
  xhr.send();
});
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data){
  console.log(data);
}).catch(function(err){
  console.log(err);
});
