// Metodo include

let numbers = [1,2,3,7,8];

function reconocedora (a){

if(numbers.includes(a)){
    console.log ("Si se encuentra el valor.");
} else {
    console.log ("No se encuentra el valor");
}
}

reconocedora(11)

// Operador de potenciacion (**)

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result)
