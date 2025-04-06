type user={
    name:string,
    age?:number,
    location:string
};
const User:user={
    name:"Richard",
    age:25,
    location:"Berlin"
};
console.log(`name:${User.name} age:${User.age} location:${User.location}`);