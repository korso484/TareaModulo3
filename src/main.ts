import "./style.css";

//Creamos la interface
interface Grupo {
    nombre: string;
    fundacion: number;
    activo : boolean;
    genero : string;
}

//Definimos las constantes de género y estilo de los nombres
const genero1: string = "🎵 Pop rock";
const genero2: string = "🎸 Rock";
const genero3: string = "🤘 Hard Rock";
const genero4: string = "🎼 Clásica";
const estiloNombre: string = "background-color: green; font-weight: 700; font-size: 16px";


//Creamos los grupos
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


//Sacamos por consola los grupos
console.log(`%c${grupo1.nombre}`, estiloNombre);
console.log(`Año de fundación:  ${grupo1.fundacion}`);
console.log(`¿Está en activo?:  ${grupo1.activo}`);
console.log(`Género musical:  ${grupo1.genero}`);

console.log(`%c${grupo2.nombre}`, estiloNombre);
console.log(`Año de fundación:  ${grupo2.fundacion}`);
console.log(`¿Está en activo?:  ${grupo2.activo}`);
console.log(`Género musical:  ${grupo2.genero}`);

console.log(`%c${grupo3.nombre}`, estiloNombre);
console.log(`Año de fundación:  ${grupo3.fundacion}`);
console.log(`¿Está en activo?:  ${grupo3.activo}`);
console.log(`Género musical:  ${grupo3.genero}`);

console.log(`%c${grupo4.nombre}`, estiloNombre);
console.log(`Año de fundación:  ${grupo4.fundacion}`);
console.log(`¿Está en activo?:  ${grupo4.activo}`);
console.log(`Género musical:  ${grupo4.genero}`);

console.log(`%c${grupo5.nombre}`, estiloNombre);
console.log(`Año de fundación:  ${grupo5.fundacion}`);
console.log(`¿Está en activo?:  ${grupo5.activo}`);
console.log(`Género musical:  ${grupo5.genero}`);


