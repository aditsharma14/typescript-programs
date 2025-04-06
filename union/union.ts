
let password: string | number = 20;

type userInfo = {
  first: string;
  last: string;
  age: number;
};

type accountDetails = {
  email: string;
  password: string;
};

let user: userInfo | accountDetails = {
  first: "HuXn",
  last: "WebDev",
  age: 29,
};

console.log(user);

const items: (number | string)[] = [1, 3, "hello"];
console.log(items);
