interface Person {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void;
};
function greet(person: Person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
    person.sayHello();
  }