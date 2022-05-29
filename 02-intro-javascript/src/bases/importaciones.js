import { heroes } from './data/heroes';


// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }


const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

const getHeroesByOwner = (owner) => {
    return heroes.filter(heroe => heroe.owner === owner);
}

console.log(getHeroeById(1));
console.log(getHeroesByOwner("DC"));

export {getHeroeById};