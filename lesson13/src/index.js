const person = {
  name: 'John',
  age: 30,
  job: 'developer'
}

// const newPerson = person.reduce(res, 0)

function updatePerson(initPerson) {
  const entries = Object.entries(initPerson)
  const entriesWithOutJob = entries.filter((entry) => entry[0] !== 'job')
  const entriesWithAdultState = [
    ...entriesWithOutJob,
    ['isAdult', initPerson.age > 18]
  ]
  const entriesWithIncreasedAge = entriesWithAdultState
    .map((entry) => {
      if (entry[0] === 'age') {
        return [entry[0], entry[1] + 10]
      }

      return entry
    })

  console.log(entriesWithOutJob)
  console.log(entriesWithAdultState)
  console.log(entriesWithIncreasedAge)

  return Object.fromEntries(entriesWithIncreasedAge)
}

console.log(updatePerson(person))
