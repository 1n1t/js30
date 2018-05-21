// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
]

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
]

// Some and Every Checks

// Array.prototype.some() // is at least one person 19 or older?
function olderThan19({ year }) {
  return new Date().getFullYear() - year >= 19
}

const hasOlderThan19 = people.some(olderThan19)
console.log('hasOlderThan19 = ', hasOlderThan19)

// Array.prototype.every() // is everyone 19 or older?
const everyOlderThan19 = people.every(olderThan19)
console.log('everyOlderThan19 = ', everyOlderThan19)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment823423 = comments.find(({ id }) => id == 823423)
console.log('comment823423 = ', comment823423.text)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const indexToDelete = comments.findIndex(({ id }) => id == 823423)
const newArr = [
  ...comments.slice(0, indexToDelete),
  ...comments.slice(indexToDelete + 1),
]

console.log('delete = ', newArr)
