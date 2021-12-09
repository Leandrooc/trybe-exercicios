// SUM
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// myRemove
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// myFizzBuzz
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// encode - decode
function encode(stringg) {
  let arraystring = stringg.split('');
  let encod = [];

 for(index = 0; index < arraystring.length; index++) {
   if(arraystring[index] === "a") {
     encod.push("1")
   } else if(arraystring[index] === "e") {
    encod.push("2")
  } else if(arraystring[index] === "i") {
    encod.push("3")
  } else if(arraystring[index] === "o") {
    encod.push("4")
  }  else if(arraystring[index] === "u") {
    encod.push("5")
  } else {
    encod.push(arraystring[index])
  }
 }
 
 let result = encod.join("")
 return result

}

function decode(stringg) {
  let arraystring = stringg.split('');
  let encod = [];

 for(index = 0; index < arraystring.length; index++) {
   if(arraystring[index] === "1") {
     encod.push("a")
   } else if(arraystring[index] === "2") {
    encod.push("e")
  } else if(arraystring[index] === "3") {
    encod.push("i")
  } else if(arraystring[index] === "4") {
    encod.push("o")
  }  else if(arraystring[index] === "5") {
    encod.push("u")
  } else {
    encod.push(arraystring[index])
  }
 }
 let result = encod.join("")
 return result

}

//
module.exports = {
  myRemove,
  sum,
  myFizzBuzz,
  encode,
  decode,
}
