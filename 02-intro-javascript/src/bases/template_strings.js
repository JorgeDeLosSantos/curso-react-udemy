const nombre = "Pedro Jorge";
const apellido = "De Los Santos";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Testeando ando ${getSaludo(nombreCompleto)} `);