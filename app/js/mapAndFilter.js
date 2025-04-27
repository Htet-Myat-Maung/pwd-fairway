let users = [
  {
    "name": "Alice",
    "age": 30
  },
  {
    "name": "Bob",
    "age": 25
  },
  {
    "name": "Charlie",
    "age": 35
  },
  {
    "name": "David",
    "age": 28
  },
  {
    "name": "Eve",
    "age": 32
  }
]

console.log(users.map(user=> user.name));
console.log(users.filter(user=>user.age<=30));
console.log(users.filter(user => user.age <= 30).map(user => user.name));