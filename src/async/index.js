const fnasync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Async"), 1895)
        : reject(new Error("Error"));
    })
}

const anotherFn = async () => {
    const something = await fnasync();
    console.log(something);
    console.log("Hello");
}

console.log("Before");
anotherFn();
console.log("After");