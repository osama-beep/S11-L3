//1

//I tipi primitivi principali in TypeScript sono:
//number
//string
//boolean
//null
//undefined
//any

//2
const nome: string = "Mario";
const eta: number = 30;
const studiandoTypeScript: boolean = true;
console.log("Esercizio 2:", nome, eta, studiandoTypeScript);

//3

const greet = (name: string) => { return "Ciao " + name }
console.log("Esercizio 3:", greet("Alice"));

//4

const sum = (a: number, b: number): number => { return a + b }
console.log("Esercizio 4:", sum(5, 3));

//5

const calcolaIVA = (prezzo: number): number => {
    return prezzo * 1.22;
}
console.log("Esercizio 5:", calcolaIVA(100));

//6

const concatenaEMisura = (str1: string, str2: string): number => {
    return (str1 + str2).length;
}
console.log("Esercizio 6:", concatenaEMisura("Hello", "World"));

//7

type StringOrNumber = string | number;

//8

let variabile: number | null | undefined;

//9

type GiorniDellaSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

//10

const numbers1: number[] = [1, 2, 3];
// oppure
const numbers2: Array<number> = [1, 2, 3];
console.log("Esercizio 10:", numbers1, numbers2);

//11

type MiaTupla = [string, string, string, number, number];

//12


//La differenza principale tra type e interface è che type è più flessibile 
//e può essere usato per creare alias di tipi, unioni, 
//intersezioni e altro, mentre interface è specificamente 
//per definire la forma degli oggetti e può essere estesa.

//13

interface Persona {
    firstname: string;
    lastname: string;
    age: number;
}

//14

interface Utente {
    email: string;
    telefono?: string;
}

//15

interface Studente {
    nome: string;
    voto: number;
}

const studenti: Studente[] = [
    { nome: "Mario", voto: 8 },
    { nome: "Luigi", voto: 7 }
];
console.log("Esercizio 15:", studenti);

//16

interface Veicolo {
    marca: string;
    modello: string;
}

interface Auto extends Veicolo {
    numeroPorte: number;
}

//17

const miaAuto: Auto = {
    marca: "Fiat",
    modello: "500",
    numeroPorte: 3
};
console.log("Esercizio 17:", miaAuto);

//18

//I Generics in TypeScript sono un modo per creare componenti riutilizzabili 
//che possono lavorare con una varietà di tipi piuttosto che un singolo tipo.

//19

//Sì

//20

interface APIResponse<T> {
    data: T;
    status: number;
    message: string;
}
