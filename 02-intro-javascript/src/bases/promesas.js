import { getHeroeById } from "./bases/importaciones";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     })
// });

// promesa.then( () => {
//     console.log("Heroe ", heroe)
// } )
// .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject("No se pudo encontrar el héroe");
            }
        }, 2000)
    });    
}

getHeroeByIdAsync(22)
    .then(heroe => console.log("Heroe ", heroe))
    .catch(err => console.warn(err));