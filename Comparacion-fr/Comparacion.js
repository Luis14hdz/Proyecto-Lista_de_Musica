//Comparación

//igualdad
if (5 == 5){
    console.log("5 es igual que 5")
}

if (5 === 5){
    console.log("5 es igual que 5")
}

let a = 5;
console.log (typeof a)
let b = "5";
console.log(typeof b)

if (a == b){
    console.log("comparacion facil")
}

if (a === b){
    console.log("comparacion estricta")
}

//Distino

let c =10;
console.log(typeof c)
let d = "10";
console.log(typeof d)

//Distinto basico

if (c != d){
    console.log("Distinto debil")
}

if (c !== d){
    console.log("Distinto fuerte")
}

//mayor que y menor que

let max = 10;
let min = 5;

if (max > min){
    console.log("max es mayor que min")
}

if (max >= min){
    console.log("max es mayor o igual que min")
}

if (min < max){
    console.log("min es menor que max")
}

if (min <= max){
    console.log("min es menor o igual que max")
}