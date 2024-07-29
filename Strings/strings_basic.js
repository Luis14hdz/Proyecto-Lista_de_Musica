
//string (cadena de caracteres)

let str1 = "Hola soy un texto con comillas";
let str2 = 'Hola soy un texto con comillas simples';
let str3 = "comillas \"dentro\" de comillas";
let str4 = 'comillas"dentro"de comillas'
let str5 = 'comillas \'dentro\' de comillas'

console.log(str1); 'Hola soy un texto con comillas'
console.log(str2); 'Hola soy un texto con comillas simples'
console.log(str3); 'comillas"dentro"de comillas'
console.log(str4); 'comillas"dentro"de comillas'
console.log(str5); 'comillas \'dentro\' de comillas'

//comillas invertidas `` (backticks)

let str6 = "comillas invertidas backticks";
console.log(str6);

let nombre = "Dávila";
let saludo = `Hola, ${nombre}bienvenido`

console.log(saludo); `Hola Ulises Bienvenido`
 
//HTML
let plantilla_html = `
<html>
    <h1>Página web de ${nombre} </h1>
    </html>
    `
    