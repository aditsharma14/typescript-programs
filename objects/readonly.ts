type person={
    name:string,
    age:number,
    readonly email:string
};
const user:person={
    name:"John",
    age:18,
    email:"hello@gmail.com"
}
console.log(user.email);
