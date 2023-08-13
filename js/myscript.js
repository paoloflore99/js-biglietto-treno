
//sulgli appunti metti il new date()

//esercizio ---------------------------------------------------------------
const chilometriEsc = prompt("inserire la distanza da perchorrere");
document.getElementById("distanza").innerHTML = `${chilometriEsc}`;
console.log (chilometriEsc)



//da completare 
// const finaleEsc = prompt("inserire nome e cognome")                           
// document.getElementById("finale").innerHTML = `${finaleEsc}`;
// console.log (finaleEsc)


const etaEsc = prompt("inserire la tua eta");
document.getElementById("eta").innerHTML = `${etaEsc}`;
console.log (etaEsc)


const prezzo = chilometriEsc * 0.2 ;
console.log (prezzo)

if (etaEsc <= 18) {
    document.getElementById("prezzoFinale").innerHTML = ((chilometriEsc * 0.2));
    console.log ("prezzo scontato ai minorenni")
}else {
    if (etaEsc >= 40) {
        document.getElementById("prezzoFinale").innerHTML = (prezzo * 0.4);
        console.log ("prezzo scontato ai over 40 ")
    } else if (etaEsc > 60) {
        document.getElementById("prezzoFinale").innerHTML = (prezzo * 0.6);
        console.log ("prezzo non scontato")
    }
}


//completare 


//moltiplicare per prima cosa i chilometri per * 0.21
//poi dal prezzo finale applicare uno sconto in base alleta 
//quidi usare la condizione per capire qunto sconto applicare in base alleta 


