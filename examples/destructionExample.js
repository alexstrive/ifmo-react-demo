const arr = ['apple', 'banana', 'orange']

const [apple, fruit2, fruit3] = arr

console.log(apple === arr[0])
console.log(fruit2 === arr[1])
console.log(fruit3 === arr[2])

const someObj = {
  name: 'Alex',
  age: 20,
  skills: ['React', 'Vue', 'JavaScript', 'so on'],
  hair: 'Brown',
  eyes: 'Brown',
}

const { name, age, ...rest } = someObj

console.log(name)
console.log(age)
console.log(rest)
