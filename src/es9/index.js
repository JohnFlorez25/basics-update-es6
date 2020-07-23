//operador reset o de reposo
const obj = {
    name: "john",
    age: 27,
    country: "Colombia"
};
//podemos establecer que necesito de un objeto
let { name, ...all} = obj;
console.log(name, all);

//utilizar las propiedades de propagación unir elementos de objetos a nuevo objeto
const obj = {
    name: "john",
    age: 27,
};
//uniendo un objeto con otro objeto
const obj1 = {
    ...obj,
    country: "Colombia"
};

console.log(obj1);

const helloWord = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=> resolve("Hello Word"), 3000)
            : reject(new Error('Test Error'))
    })
}
//se agrego finally 
helloWord()
    .then(response => console.log(response))
    .catch( error => console.log(error))
    .finally(() => console.log("finalizo"));

//bloques de rgnx
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
//hacer match para mirar datos establecidos
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);