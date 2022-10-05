const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
})

const aBigNumber = 90065421654321n;
const anotherBigNumber = BigInt(90065421654321);

console.log(aBigNumber);
console.log(anotherBigNumber)

//Promise.allSettled

const promise1 = new Promise ((resolve, reject) => reject('reject'))
const promise2 = new Promise ((resolve, reject) => resolve('resolve'))
const promise3 = new Promise ((resolve, reject) => resolve('resolve 1'))

Promise.allSettled([promise1, promise2, promise3])
.then(response=> console.log(response));


// variable reservada GlobalThis
console.log(window);
console.log(globalThis)

// Operador Nullish Coalescing (??)

const fooo = null ?? 'default string'
console.log(fooo) // devuelve 'default string'

// Encadenamiento opcional. | Optional chaining (?.)
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email')
} else {
    console.log('fail');
}