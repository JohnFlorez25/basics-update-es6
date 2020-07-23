//devolver claves y valores de una matriz
const data = {
  frontend: 'Faber',
  backend: 'David',
  design: 'Elizabeth',
};

//como voy a transformar este objeto a una matriz
const entries = Object.entries(data);
console.table(entries);
//si queremos saber cuantos elementos contiene un objeto
console.log(entries.length);

const data = {
  frontend: 'Faber',
  backend: 'David',
  design: 'Elizabeth',
};
//transformación a un vector ignorand las claves
const values = Object.values(data);
console.log(values);

//padding - nos puede servir para presentar estructuras de elementos
//
const string = 'Hello';
//como podemos anteponer o cadena vacia o elementos a este string
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' ------ '));
//TRELLING COMAS --> PUEDO TERMINAR CON UNA COMA POR SI SIGUEN MÁS ELEMENTOS
//sin caer en un error
const data = {
  frontend: 'Faber',
  backend: 'David',
  design: 'Elizabeth',
};

const helloWord = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('The erroooorrr!!!'));
  });
};

//Implementando async y await
const helloAsync = async () => {
  const hello = await helloWord();
  //const hello2 = await otherFunction();
  console.log(hello);
};

helloAsync();


const anotherFunction = async () => {
    try{
        const hello = await helloWord();
        console.log(hello);
    } catch(error) {
        console.log(error);
    }
};

anotherFunction();