function hello(fn){
    let cache={};
    return function(x){
        if(cache[x])
        return cache[x];
        
        const result=fn(x);
        cache[x]=result;
        return result;
    }
}
function square(x){
    console.log("Call Me");
    return x*x;
}

const op=hello(square);
console.log(op(2));
console.log(op(4));
console.log(op(2));
