type Person = {
    name: string;
    age: number;
  };
  
  function printPerson(person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }
  
  const myPerson: Person = { name: "Alice", age: 25 };
  printPerson(myPerson);