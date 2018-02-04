function job(){
  process();
}

function process(){
  console.log('Processing');

  var result = 'some data';
  print(result);

  finish();
}

function print(){
  console.log(result);
}

function finish(){
  debugger;
}

job();

var sleep = n => new Promise(resolve => setTimeout(resolve, n))

function job(){
  process();
}

async function process(){
  console.log('Processing');
  await sleep(100);
  var result = await fetch('https://www.google.com/favicon.icon')
  await print(result);
  await sleep(100);
  await finish();
}

function print(result){
  console.log(result);
}

function finish(){
  debugger;
}

job();

http://api.wunderground.com/api/dc0b107e57ff45f5/conditions/q/CA/San_Francisco.json
fetch('http://api.wunderground.com/api/dc0b107e57ff45f5/conditions/q/CA/San_Francisco.json')
.then((res) => {
  res.json().then((data) => {
    console.log(data);
  });
.catch((err)=> {
  console.log(err);
});


fetch('http://api.icndb.com/jokes/random/40')
.then((res) => {
  res.json().then((data) => {
    console.log(data);
  });

});
