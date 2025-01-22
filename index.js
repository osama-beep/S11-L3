//1
//I tipi primitivi principali in TypeScript sono:
//number
//string
//boolean
//null
//undefined
//any
//2
var nome = "Mario";
var eta = 30;
var studiandoTypeScript = true;
console.log("Esercizio 2:", nome, eta, studiandoTypeScript);
//3
var greet = function (name) {
  return "Ciao " + name;
};
console.log("Esercizio 3:", greet("Alice"));
//4
var sum = function (a, b) {
  return a + b;
};
console.log("Esercizio 4:", sum(5, 3));
//5
var calcolaIVA = function (prezzo) {
  return prezzo * 1.22;
};
console.log("Esercizio 5:", calcolaIVA(100));
//6
var concatenaEMisura = function (str1, str2) {
  return (str1 + str2).length;
};
console.log("Esercizio 6:", concatenaEMisura("Hello", "World"));
//8
var variabile;
//10
var numbers1 = [1, 2, 3];
// oppure
var numbers2 = [1, 2, 3];
console.log("Esercizio 10:", numbers1, numbers2);
var studenti = [
  { nome: "Mario", voto: 8 },
  { nome: "Luigi", voto: 7 },
];
console.log("Esercizio 15:", studenti);
//17
var miaAuto = {
  marca: "Fiat",
  modello: "500",
  numeroPorte: 3,
};
console.log("Esercizio 17:", miaAuto);
