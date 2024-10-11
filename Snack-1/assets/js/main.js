/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

//----------------------------------------------------------------------------------------------------------------------

// 1 Raccolta Dati
// Scrivere array di oggetti biciclette
const biciclette = [
    {
        "Nome": "Bici 1",
        "Peso": 10,
    },
    {
        "Nome": "Bici 2",
        "Peso": 8,
    },
    {
        "Nome": "Bici 3",
        "Peso": 4,
    },
    {
        "Nome": "Bici 1",
        "Peso": 6,
    },
]

// 2 Elaborazione Dati
// Creare variabile equivalente a un grande numero
let peso = 999
// Creare ciclo for per controllare all'interno dell'array
for (let i = 0; i < biciclette.length; i++) {
    const Bici = biciclette[i];

    Math.min(biciclette.map(item => item.peso));
    
}
console.log(Bici)