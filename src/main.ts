import "./style.css";

interface Grupo {
    nombre: string;
    fundacion: number;
    activo : boolean;
    genero : string;
}

const genero1: string = "🎵 Pop rock";
const genero2: string = "🎸 Rock";
const genero3: string = "🤘 Hard Rock";
const genero4: string = "🎼 Clásica";


const grupo1: Grupo = {
    nombre: "The Beatles",
    fundacion: 1960,
    activo: true,
    genero: genero1,
}

const grupo2: Grupo = {
    nombre: "Queen",
    fundacion: 1970,
    activo: false,
    genero: genero2,
}

const grupo3: Grupo = {
    nombre: "AC DC",
    fundacion: 1973,
    activo: true,
    genero: genero3,
}

const grupo4: Grupo = {
    nombre: "Ludwig Van Beethoven",
    fundacion: 1770,
    activo: false,
    genero: genero4,
}

const grupo5: Grupo = {
    nombre: "The Rolling Stones",
    fundacion: 1962,
    activo: true,
    genero: genero2,
}



console.log(grupo1);
console.log(grupo2);
console.log(grupo3);
console.log(grupo4);
console.log(grupo5);

