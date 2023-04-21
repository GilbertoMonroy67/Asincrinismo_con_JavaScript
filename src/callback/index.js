function suma(num1, num2){
    return num1 + num2;
}

function call(num1, num2, callback){
    return callback(num1, num2);
};

console.log(call(2, 6, suma));

setTimeout(function(){
    console.log("Hola JavaScript");
}, 1900)

function grettin(name){
    console.log(`Hola ${name}`);
}

setTimeout(grettin, 1800, "Gilberto")