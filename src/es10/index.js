/**
 * Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
 * Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
 * String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
 * try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
 * Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
 * Symbol.prototype.description: permite regresar el descripcion opcional del Symbol
*/

let array = [1,2,3, [1,2,3, [1,2,3]]];

//array.flat nos va a permitir enviar una matriz con matriz internar de forma plana
console.log(array.flat());
console.log(array.flat(2));
console.log(array.flat(3));

//flat.map me hace un map de cada elemento y lo aplana segun el resultado
let array = [1,2,3,4,5];
console.log(array.flatMap(value =>[value, value*2]));

//trim permite eliminar los elementos en blanco de un string
let hello = '           hello word';
console.log(hello);
console.log(hello.trimStart());

//eliminar espacios al final del texto
let hello = 'helo word          ';
console.log(hello);
console.log(hello.trimEnd());

//Opcional podemos pasar de forma opcional el parametro de error a catch
//ya esta disponible error dentro del catch
try{

}catch{

}

//from entries para converitr a clave valor
let entries = [["name","oscar"],["age",27]];
console.log(Object.fromEntries(entries));

//descripcion de un simbolo
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);