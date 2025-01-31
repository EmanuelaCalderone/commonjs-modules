//creo la funzione che accetta due parametri(firstName e lastName)
function fullName(firstName, lastName) {
    
    //la funzione restituisce un oggetto con le due proprietà
    return {
        firstName: firstName,
        lastName: lastName,
    };
}

//console.log(fullName("Emanuela", "Calderone"));

//esporto la funzione
module.exports = fullName;