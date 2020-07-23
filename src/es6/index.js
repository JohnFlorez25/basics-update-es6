function newFunction(name, age, country) {
  var name = name || 'faber';
  var age = age || 27;
  var country = country || 'Colombia';
  console.log(name, age, country);
}

//es6
function newFunction2(name = 'Faber', age = 27, country = 'Colombia') {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Elizabeth', 23, 'MX');

//template literals
let hello = 'Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
//MULTI-LINEA
let lorem = 'Probando mi super lorem ipsum  \n' + 'que es una frase epica.';
//usando multilinea sin problemas
let lorem2 = `Probando mi super lorem ipsum 
ahora es una frase epica.`;
console.log(lorem);
console.log(lorem2);
//DESESTRUCTURACIÓN DE ELEMENTOS
let person = {
  name: 'Faber',
  age: 27,
  country: 'Colombia',
};
console.log(person.name, person.age);
//desestructurando....es6
let { name, age, country } = person;
console.log(name, age, country);
//operador de propagación: expandir elementos
let team1 = ['Faber', 'Elizabeth', 'Oscar'];
let team2 = ['John', 'David', 'Laura'];
//creando un nuevo elemento con los demas arreglos
let education0 = team1 + team2;
let education = ['Andrea', ...team1, ...team2];
console.log(education);
console.log(education0);
//nuevas variables, let, const --> NO USAR VAR;
var hola = 'hola';
{
  var globalVar = 'global var';
}

{
  let globalLet = 'global let';
  console.log(globalLet);
}
//console.log(globalVar, globalLet);
console.log(globalVar);
//const -> establecer una variable CONSTANTE
const a = 'b';
a = 'c';
console.log(a);
//OBJETOS MEJORADOS
let name = 'Faber';
let age = 27;
//como se creaba un objeto antes
obj = { name: name, age: age };
//actual, captura llave y valor de acuerdo a las variables definidas
obj2 = { name, age };
console.log(obj);
console.log(obj2);
//ARROW FUNCTION, FUNCIONES DE TIPO FLECHA
//una sintaxis reducida y un THIS no vinculable
const names = [
  { name: 'Faber', age: 27 },
  { name: 'Elizabeth', age: 26 },
];
///normalmente para recorrer y mostrar
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//las arrow function son funciones anónimas
let listOfNames2 = names.map((item) => {
  console.log(item.age);
});
// otra forma
const listOfNames3 = (name, age) => {};
//cuando estoy pasando un único parámetro
const listOfNames4 = (name) => {};
//puedo usar una nueva funcion
const square = (num) => num * num;
//PROMESAS, podemos trabajar el asincronismo
//ejecuta elemento por elemento javascript, no es sincronico
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Jeeey!!! already');
    } else {
      reject('Upps :( something is wrong');
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//CLASES POO
class Calculator {
  //inicializando la clase
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));

//export import

import hello from './modulo';

hello();

//GENERADORES GENERATORS...
function* helloWorld(){
    if(true){
        //guarda el estado de forma interna
        yield 'Hello, '
    }
    if(true){
        yield 'world'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
