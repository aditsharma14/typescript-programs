type Mytype=string|number;
function examplefunction(value:Mytype):void{
    if(typeof(value)=="string"){
        console.log(value.toUpperCase());
    }else{
        console.log(value.toFixed(2));
    };
};
examplefunction(2);
examplefunction("hello");