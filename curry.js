const colors = require('colors')

const curry = (f) => {
  return a => b => f(a, b)
}

const getItCurried = (f, arg1, arg2) => {
  const curriedFunc = curry(f)
  const a1 = curriedFunc(arg1)
  return a1(arg2)
}

const myFunc = (x, y) => x + y

const result = getItCurried(myFunc, 3, 6)

if (result === 9){
  console.log('Success! Result: '.green, result.toString().green)
} else {
  console.log('Failure! Result: '.red, result.toString().red)
}
  

