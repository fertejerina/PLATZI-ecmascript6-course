const string = "La realidad depende de nuestro estado interior. Nuestro estado interior es moldeable. ";
//Metodo replace
const replacedString = string.replace("estado interior", "amor propio")
console.log(replacedString)

//Metodo replaceAll
const replacedString2 = string.replaceAll("estado interior", "amor propio")
console.log(replacedString2)

//Métodos privados de clases

class Message {
    //si agregamos # se vuelven privados.
    #show (val){
        console.log(val);
    }
}

const message = new Message()
message.show("Hola!");

//Obj Promise.any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response))

// WeakRef
//Un objeto WeakRef consiste en mantener una referencia débil a otro objeto, para evitar que ese objeto sea eliminado por el Garbage Collection{target="_blank"}.

class Clase{
    constructor(valor){
        this.ref = new WeakRef(valor)
    }
    // ...
}

//Nuevos operadores de asignación

/* Asignación AND (&&=), en caso de cumplirse una verdad, asigna un valor a una variable.
Asignación OR (||=), en caso de cumplirse una falsedad, asigna un valor a una variable.
Asignación Nullish (??=), en caso de cumplirse undefined o null, asigna un valor a una variable. */