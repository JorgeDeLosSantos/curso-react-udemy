const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
};

const {nombre,edad,clave} = persona;

// console.log(persona.nombre);
console.log(nombre);

const retornaPersona = ({nombre, edad}) => {
    // console.log(nombre, edad);
    return {
        nombreClave: clave,
        anios: edad,
    }
}

const x = retornaPersona(persona);

console.log(x);