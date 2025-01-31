//importo la funzione da names.js
const fullName = require("./names.js")

//importo la funzione da hobbies.js
const hobbies = require("./hobbies.js")

//destrutturo l'oggetto ottenuto dalla funzione fullName per ottenere i due valori
const { firstName, lastName } = fullName("Emanuela", "Calderone");

//chiamo la funzione e passo i tre parametri (stringhe)
const hobbiesList = hobbies("nuoto", "surf", "pallavolo");


//creo una funzione senza parametri in ingresso
function person() {

    //la funzione restituisce l'oggetto con le due proprietà
    return {
        fullName: `${firstName} ${lastName}`,
        hobbies: hobbiesList,
    };
}

//stampo la funzione
console.log(person());