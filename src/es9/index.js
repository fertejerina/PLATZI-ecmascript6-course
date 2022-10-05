//parametros rest
const obj = {
    name: "fer",
    age: 25,
}

const obj1 = {
    ...obj,
    country: "ARG"
}

console.log(obj1);


// finally (promesas)

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve ('HelloWorld'),3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("Finalizado."))

//manejo del reject

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-08-21');
const year = match[1];
const month = match[2];
const day = match[3];

console.log ('The date is -> ', year, month, day);