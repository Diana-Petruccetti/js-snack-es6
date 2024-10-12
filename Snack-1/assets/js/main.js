/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

//----------------------------------------------------------------------------------------------------------------------

// 1 Raccolta Dati
// Scrivere array di oggetti biciclette
const biciclette = [
    {
        /* Meglio scrivere tutti i nomi in minuscolo per non confondersi */
        "nome": "bici 1",
        /* I numeri vanno scritti senza virgolette per permettere i calcoli */
        "peso": 10,
    },
    {
        "nome": "bici 2",
        "peso": 8,
    },
    {
        "nome": "bici 3",
        "peso": 4,
    },
    {
        "nome": "bici 4",
        "peso": 6,
    },
]

// 2 Elaborazione Dati
// Creare variabile equivalente a un grande numero per permettere al ciclo for di scegliere numeri più piccoli
let peso = 999
// Creare ciclo for per controllare all'interno dell'array
// Mettere i = 0 per far partire a controllare dall'inizio
// Mettere il nome dell'array.lunghezza per far controllare l'array dall'inizio alla fine
for (let i = 0; i < biciclette.length; i++) {
    /* Mettere il nome di ciò che ci interessa controllare, in questo caso "bici" = il nome dell'array */
    const bici = biciclette[i];
    /* Utilizzare questa formula per trovare il numero minore nell'array
    Mettere all'inizio il nome della caratteristica che ci interessa = Math.min(nome caratteristica,
    nome di ciò che ci interessa controllare.nome caratteristica) */
    peso = Math.min(peso, bici.peso);
}
/* loggare il risultato in console */
console.log(peso)
/* stampare il risultato sulla pagina web/sull'html */
document.write(peso)