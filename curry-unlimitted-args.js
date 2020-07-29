
const colors = require('colors')
const functionClone = require('./Function.clone')

// TODOS: Bad solution, need looking at
console.log('INCOMPLETE / BAD SOLUTION'.red)

const curry = (f) => {
  const numOfArgs = f.length;
  let curried;
  
  for (let i = 0; i < numOfArgs; i++){
    if (i === 0){
      curried = (...args) => f.apply(null, args)
    } else {
      const innerCurried = curried.clone()
      curried = (...args) => innerCurried
    }
  }
  
  return curried
}

const myFunc1 = (x, y) => x + y
const myFunc2 = (x, y, z) => x + y + z

// console.log(curry(myFunc1).toString())

const result1 = curry(myFunc1)(3)(6)
const result2 = curry(myFunc2)(3)(6)(9)

if (result1 === 9){
  console.log('Success! Result: '.green, result1.toString().green)
} else {
  console.log('Failure! Result: '.red, result1.toString().red)
}

if (result2 === 18){
  console.log('Success! Result: '.green, result2.toString().green)
} else {
  console.log('Failure! Result: '.red, result2.toString().red)
}








  


