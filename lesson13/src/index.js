// const person = {
//   name: 'John',
//   age: 30,
//   job: 'developer'
// }

// // const newPerson = person.reduce(res, 0)

// function updatePerson(initPerson) {
//   const entries = Object.entries(initPerson)
//   const entriesWithOutJob = entries.filter((entry) => entry[0] !== 'job')
//   const entriesWithAdultState = [
//     ...entriesWithOutJob,
//     ['isAdult', initPerson.age > 18]
//   ]
//   const entriesWithIncreasedAge = entriesWithAdultState
//     .map((entry) => {
//       if (entry[0] === 'age') {
//         return [entry[0], entry[1] + 10]
//       }

//       return entry
//     })

//   console.log(entriesWithOutJob)
//   console.log(entriesWithAdultState)
//   console.log(entriesWithIncreasedAge)

//   return Object.fromEntries(entriesWithIncreasedAge)
// }

// console.log(updatePerson(person))

// const entry = ['age', 30, 'job', 'developer']

// const [firstValue, ...rest] = entry

// console.log(firstValue)
// console.log(rest)

const person = {
  name: 'John',
  age: 30,
  job: 'developer'
}

function updatePerson(initPerson) {
  const { job, ...restFields } = initPerson

  return {
    ...restFields,
    age: restFields.age + 10,
    isAdult: restFields.age > 18
  }
}

console.log(updatePerson(person));

[
  { name: 'P', price: 100 },
  { name: 'P', price: 700 },
  { name: 'P', price: 1000 }
].forEach(({ name }) => {
  console.log(name)
})

async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  const user = await response.json()

  console.log(user.title)
}

getUser()

// const { name, ...restFields } = person

// console.log(name)
// console.log(restFields)
