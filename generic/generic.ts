function uniquedatatypefunc<Type>(
    item:Type,
    defaultvalue:Type
):[Type,Type]{
    return [item,defaultvalue];
};
const f=uniquedatatypefunc<number>(42,0);
console.log(f);
const g=uniquedatatypefunc<string>("adit","adi");
console.log(g);