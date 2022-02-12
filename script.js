

let deplacerPion = function(dep, arr){
    let image_dep = document.querySelector(`#${dep} img`).src
    document.querySelector(`#${dep} img`).src = ""
    document.querySelector(`#${arr} img`).src = image_dep
}

deplacerPion("H1", "H2")
deplacerPion("G2","F2")