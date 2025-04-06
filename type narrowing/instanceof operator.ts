class Dog{
    bark():void{
        console.log("Woff Woff");
    }
}
class Cat{
    meow():void{
        console.log("Meow Meow");
    }
}
function animalsound(animal:Dog|Cat):void{
    if(animal instanceof Dog){
        animal.bark();
    };
    if(animal instanceof Cat){
        animal.meow();
    }
}
const myDog = new Dog();
const myCat = new Cat();

animalsound(myDog); 
animalsound(myCat);