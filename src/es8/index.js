//Métodos de transformación de objetos a arrays
//Declaramos el objeto
const data = {
    frontend: 'Oscar',
    backend: 'Dana',
    design: 'Juan',
}
//Usamos Object.entries(objeto)
const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)

const data = {
    frontend: 'Oscar',
    backend: 'Dana',
    design: 'Juan',
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

const string = "Hello";
console.log(string.padStart(7,"hi"))
console.log(string.padEnd(50, " ---asdasda   --"))



//Async Await
//Creamos la promesa
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (false) // para que siempre pase
        ? setTimeout(()=> resolve("Hello World"), 3000)
        : reject(new Error("Test Error"))
    })
};

const helloAsync = async() => {
    const hello = await helloWorld ();
    console.log(hello)
}

helloAsync();







const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()