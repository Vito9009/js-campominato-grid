/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

let play = document.getElementById("play"); // Variabile tasto play

play.addEventListener ("click", function(){ // evento al click del tasto play
    let selectLevel = document.getElementById("difficulty-level").value; // variabile per il select
    let gridCreator = document.getElementById("grid"); // variabile per selezionare il contenitote per la creazione della griglia di gioco
    gridCreator.innerHTML = ""; // Elimina griglia precedente prima di creare la nuova griglia dopo il click del pulsante play

    if (selectLevel == "easy"){ // Se seleziono il livello easy
        for(let i=1; i<=100; i++){
            gridCreator.innerHTML += `
            <div class="box-ten clickedBox">
            ${i}
            </div>
            `;
        }
    }else if (selectLevel == "medium"){ // Se seleziono il livello medium
        for(let i=1; i<=81; i++){
            gridCreator.innerHTML += `
            <div class="box-nine clickedBox">
            ${i}
            </div>
            `;
        }
}else if (selectLevel == "hard"){ // Se seleziono il livello hard
    for(let i=1; i<=49; i++){
        gridCreator.innerHTML += `
        <div class="box-seven clickedBox">
            ${i}
            </div>
            `;
    }
 }

 let clickedBox = document.getElementsByClassName("clickedBox"); // Variabile per il box che cambia colore al click

    for (let i=0; i < clickedBox.length; i++){

        clickedBox[i].addEventListener("click", function(){ // Aggiunta classe per colorare il box che viene cliccato
            this.classList.add("click-colored-box");
        }
        )
    }
})

