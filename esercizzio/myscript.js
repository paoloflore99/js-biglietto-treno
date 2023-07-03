console.log("bellaaaaa")

alert("domande")

const eta = prompt("inserire la tua eta")
const chilometri = prompt("inserire il numero di chilometri")
//const discountAmount =(ticketPrice * discount ) / 100;
//const ticketPrice = prezzoFinale * chilometri

document.getElementById("eta").innerHTML = eta
document.getElementById("chilometri").innerHTML = chilometri
document.getElementById("prezzoFinale").innerHTML = (chilometri * 0.21).toFixed(2);
document.getElementById("prezzoFinale2").innerHTML = ((chilometri * 0.21) * 40 ) / 100 .toFixed(2);




//document.getElementById("tutto").innerHTML = nome+cognome+preferito+nascita

/*il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.*/

//prezzoFinale
//prova della formula da fare 
const sconto20=((chilometri * 0.21) * 20 ) / 100 // lo sconto applicato
const sconto40=((chilometri * 0.21) * 40 ) / 100
//console.log(chilometri * 0.21)


//qui fai il if per mettere lo sconto in base alleta 

let sconto =0;


if (eta < 18) {
    document.getElementById("prezzoFinale2").innerHTML = ((chilometri * 0.21) * 20 ) / 100 ;//sconto del 20%
} else if ( eta >= 65 ) {
    document.getElementById("prezzoFinale2").innerHTML = ((chilometri * 0.21) * 40 ) / 100; //sconto del 40%
} 
//qui va il non scontos

