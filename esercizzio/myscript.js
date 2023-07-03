console.log("bellaaaaa")

alert("domande")

const eta = prompt("inserire la tua eta")
const chilometri = prompt("inserire il numero di chilometri")


document.getElementById("eta").innerHTML = eta
document.getElementById("chilometri").innerHTML = chilometri
document.getElementById("prezzoFinale").innerHTML = (chilometri * 0.21)

//document.getElementById("tutto").innerHTML = nome+cognome+preferito+nascita

/*il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//prezzoFinale
//prova della formula da fare 
//console.log((50 * 20) / 100 ) //32.2 e lo sconto applicato
console.log(chilometri * 0.21) //.toFixed(2);
console.log

//qui fai il if per mettere lo sconto in base alleta 
if (eta < 18) {
    console.log()//sconto del 20%
} else if (eta > 18 && eta < 65) {
    //sconto del 40%
} else {
//qui va il non sconto
}


