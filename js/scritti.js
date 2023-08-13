//lezzione 30 giugno 
//appunti pag 3 - 4
//drive 19js




//condizioni ---------------------------------------------------------

//esempio di come si fannoo le condizzioni
if (1) {

} else if (2) {

} else if (3){  //posso mettere qunti else if voglio 

} else {

}


//alro modo di fare le condizioni '
if (1) {

} else {

    if (2) {

    }else if (3) {

    }else {

    }
}


const primaParola = "macchina e grade e spazziosa";
const secondaParola = "palla";

console.log(primaParola, primaParola.length);
console.log(secondaParola,secondaParola.length);
//il length serve ber numerare da quante lettere 
//e compsta una parola o frase , conta anche li spazzi 




//condizione --------------------------------------------------------
if (primaParola.length > secondaParola.length) {
    console.log("la parola 1 vince ");
} else {
    console.log("la parola 2 vince ");
};
//cosi facendo in base a cio che risulta vero viene appliocato in questo
///caso la prima parola e piu lunga della seconda vero , stampa in consol



//calcolo -----------------------------------------------------------

//serve per prendere la data corrente 
const currentDate = new Date();
//getFullYear prennde l'anno
//getHours prende l'ora
//getMinutes prende i minuti
//getSeconds prende i secondi
console.log (currentDate.getFullYear(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
console.log (currentDate.getFullYear());

//qui domanda leta 
const provaData = prompt("in che anno sei nato ?");
console.log (provaData);

//etaCalcolata mi fa il calcolo dell'anno attuale - l'anno che ho insertito io 
//come lo fa ?
//prendo il currentDate.getFullYear() che e lui a darmi la data e lo sotrae 
//la variabbile currentDate.getFullYear() sta a riga 34
const etaCalcolata = currentDate.getFullYear() - parseInt(provaData);
console.log (etaCalcolata);
console.log ("lutente ha " + etaCalcolata + " anni");


if (provaData <= 18) {  
console.log ("primo");
} else {
    if (provaData >= 18 && provaData <= 40){
        console.log ("seconda");
    } else if (provaData >= 65 ) {
        console.log ("terza");
    } else {
        console.log ("quarta");
    }
}

console.log ("-------------------------------------------------");

//numeri random
const numeroRandom = Math.random();

console.log (numeroRandom)  //lui mi genera un numero da 0 a 1
console.log (numeroRandom * 10)//lu genera un numero da 0 a 9 

//lui genera un numero da 0 a 9 ma intero senza decimali
console.log (Math.floor(numeroRandom * 10));

//arrotonda per ecesso 
console.log (Math.ceil(numeroRandom * 10));

//arrotonda in modo come che dal ,51 divanta +1 e da ,49 -1
console.log (Math.round(numeroRandom * 10));

console.log ("-------------------------------------------------");


const max = 15;
const min = 10;

const numeroFinale = Math.floor(Math.random() * (max - min + 1)) + min;
console.log (numeroFinale);


console.log ("-------------------------------------------------");
//PARI O DISPARI 

const pariDispari =  2;

const pari = pariDispari % 2 ;
console.log (pari);

if (pari === 0) {
    console.log("pari ")
}else {
    console.log("disparo")
}


console.log ("-------------------------------------------------");
//note 
//se si crea una variabbile all'interno di una condizione , quella 
//variabbile non puo essere utilizzata o richiamata  al di fuori 
//della condizione in qui e stata creata  