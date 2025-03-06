//1 
let persons = [
    { name: "John", age: 25, city: "NewYork" },
    { name: "Alice", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alex", age: 19, city: "London" },
    { name: "Tyler", age: 24, city: "NewYork" },
    { name: "Constantine", age: 31, city: "Paris" },
    { name: "Cole", age: 21, city: "London" },
];

let cityName = prompt("название города");
let findPersonsByCity = () => {
    let a = persons.filter(person => person.city === cityName)
    if (a.length > 0) {
        a.forEach(person => console.log(person.name));
    } else {

        console.log("Вы нету в списке");
    }
}
findPersonsByCity()

//2
let calculateAverageAge = () => {
    let b = persons.forEach(person => {
        let totalAge = persons.reduce((sum, person) => sum + person.age, 0);
        let averageAge = totalAge / persons.length;
        console.log(parseInt(averageAge));

    })
}
calculateAverageAge()


//3
let newPerson = prompt("Добавить человека");

let addNewPerson = (newPers) => {
    let a = persons.push({name:newPerson})

  console.log(persons);
  
  
}

addNewPerson(newPerson)