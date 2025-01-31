//creo una funzione che accetta tre parametri (hobbyOne, hobbyTwo, hobbyThree)
function hobbies(hobbyOne, hobbyTwo, hobbyThree) {
    
    //la funzione restituisce un array
    return [hobbyOne, hobbyTwo, hobbyThree];
}

//console.log(hobbies("nuoto", "surf", "pallavolo"));

//esporto la funzone
module.exports = hobbies;