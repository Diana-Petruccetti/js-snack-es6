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
// Creare condizione if per stampare peso più piccolo in console
if ("Peso" < 6) {
    console.log(biciclette);
}