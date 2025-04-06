function person():{name:String;age:Number;section:Number}{
    return{
        name:"adit",
        age:12,
        section:11,
    };
}
const res=person();
console.log(res);
const people: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
console.log(`name:${people.firstName} ${people.lastName},age:${people.age}`);  