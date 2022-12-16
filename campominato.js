console.log('JS OK')

/*
1)genero 100 celle per 10 righe al click del button
2)

*/


// prendo gli elementi 
let button = document.getElementById('button');
const grid = document.getElementById('grid-container');
const rows = 10
const col = 10
const totalcells= rows * col;

// aggiungo una function con un for per generare 100 celle al click
let createCell =() =>{
    for(i=0; i < totalcells; i++ ){

        let cell = document.createElement('div');
        cell.classList.add('grid-cell');
        grid.appendChild(cell);
    }}

// aggiungo un event listener per richiamare la funzione di generazione caselle al click
button.addEventListener('click', function(){
    createCell();
})

