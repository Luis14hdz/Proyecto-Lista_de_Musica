//Metodos mas usados con strings 

//como obtener la longuitud de un string 
let str_1 = "Hola soy un string";

console.log(str_1.length); //legth es el atributo de la cadena

/**Obtener partes de un string 
 * slice()
 * substrings()
 * substr()
 */
let slice_str_1 =str_1.slice(0,4);
console.log(slice_str_1);

let subtring_str_1 = str_1.substring(0,5);
console.log(subtring_str_1)

//remplazar parte de una cadena 
let cadena = "Hola mi nombre es Luis";
console.log(cadena);
//solo remplazar la primera que encuentra
console.log(cadena.replace('luis','luis'));

//Dar un ejemplo ciontexto largo 

let texto_largo = "";
console.log(texto_largo.replace('', ''));

//utilizar la expresión /g (global) reemplazar todas las instancias
console.log(texto_largo.replace(/texto/g, ''))