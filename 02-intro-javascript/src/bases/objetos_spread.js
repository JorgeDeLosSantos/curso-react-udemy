const persona = {
    nombre: "Jorge",
    apellido: "Lara",
    edad: 50,
    direccion: {
        ciudad: "New York",
        zip: 10292029,
        lat: 14.2203,
        lng: 34.2939
    }
};

const persona2 = {
    ...persona
}

persona2.nombre = "Ana";

console.log(persona);
console.log(persona2);

