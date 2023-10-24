const BIG_SQUARE = document.querySelector("#Square-container");



function deleteGrid() { 
    console.log("ouaf");
    let child = BIG_SQUARE.lastElementChild;  
    while (child) { 
        BIG_SQUARE.removeChild(child); 
        child = BIG_SQUARE.lastElementChild; 
    } 
} 


function creategrid(nb_blocs){
    console.log("miaou");
    let blocSize = `${1600/nb_blocs}px`;
    for (var i = 0; i < nb_blocs; i++){
        for(var y = 0; y < nb_blocs; y++){
            console.log("goijrg");
            let miniSquare = document.createElement("div");
            miniSquare.className = "bloc";
            miniSquare.style.width = blocSize;
            miniSquare.style.height = blocSize;
            BIG_SQUARE.appendChild(miniSquare);
            miniSquare.addEventListener(
                "mouseover",
                ()=>{
                    miniSquare.classList.add("blocUsed");
                }
            )
        }  
    }

}


const button = document.querySelector("button");

button.addEventListener(
    "click",
    ()=>{
        
        let nb_blocs = window.prompt("define number of square per sides (limit 100)","16");

        if(nb_blocs < 0){
            nb_blocs = 0;
        }
        else{
            if(nb_blocs > 100){
                nb_blocs = 100;
            }
        }
        deleteGrid();
        creategrid(nb_blocs);
    }
)


