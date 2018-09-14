// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  return drivers.push(name);
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
  return drivers
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
  return drivers
}
