/*
//Default parrams <<-----
//antes
function newFunction(name, age, country) {
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "argentina";
    console.log(name, age, country);
}
newFunction();
// es6
function newFunction2(name = "oscar", age = 32, country="argentina"){
    console.log(name, age, country)
}
newFunction2();
newFunction2("Ricardo", 21, "Bolita")
//plantillas literales (template literals) consisten en crear cadenas de caracteres que puedan contener variables.
let hello = "Hello"
let world = "World"
//Antes de ES6, si querías crear una cadena larga o un mensaje, debías utilizar la concatenación.
let epicPhrase = hello + " " + world;
console.log(epicPhrase)
//Con las plantillas literales añadidas en ES6, emplea el caracter ( ` ), que no es una comilla simple ( ’ ), para envolver el mensaje e incluir las variables con la sintaxis ${variable}.
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)
//De esta manera el código es más legible y que pueda mantenerse.

//MULTILINEA
//Forma vieja:
let lorem = "Jorgelito tiene gastroenteritis \n" + "otra frase grosa."
//Nueva forma en ES6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem)
console.log(lorem2)

//Desestructuracion de variables (destructuring)
//consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

let person = {
    name: "oscar",
    age: 32,
    country: "MX"
}
console.log(person.name, person.age)

let {name, age} = person;
console.log(name, age)

//OPERADOR DE PROPAGACION (spread operator)
//Lo que hace es propagar los elementos de un iterable, ya sea un array o string utilizando tres puntos (...) dentro de un array.


let team1 = ["Oscar", "Julian", "Ricardo"]
let team2 = ["Valeria", "Yesica", "Camila"]

let education = [...team1, ...team2]

console.log(education);

//LET
//Nueva forma de trabajar los elementos que van a memoria (VARIABLES)
//Con let solo esta disponible en nuestro bloque de codigo donde lo llamamos

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

//const

var a = "b";

console.log(a);
a = "A"
console.log(a);
*/
//Parametros en objects

/*
let name = "Fernando";
let age = 25;

//es5
let obj = {name: name, age: age}

console.log(obj)

//es6
let obj2 = {name, age}

console.log(obj2)

//ARROW FUNCTIONS
const names = [
    { name: "Fer", age: 25 },
    { name: "Juan", age: 24 }
]

let listOfNames = names.map(function (item){
    console.log(item.name)
    console.log(item.age)
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) =>{
    ...
}

const listOfNames4 = name => {

}

const square = num => num * num



// PROMISES

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hey!")
        } else {
            reject("Error.")
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    */

/*class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator();
console.log(calc.sum(10,2)) 


import { hello } from "./module";

hello()


function* helloWorld(){
    if(true){
        yield "Hello, ";
    }
    if(true){
        yield "World";
    }
    yield "jeje"
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);*/

