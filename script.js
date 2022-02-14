let case_plateau = 
            [
                ["H1","H2","H3","H4","H5","H6","H7","H8"],
                ["G1","G2","G3","G4","G5","G6","G7","G8"],
                ["F1","F2","F3","F4","F5","F6","F7","F8"],
                ["E1","E2","E3","E4","E5","E6","E7","E8"],
                ["D1","D2","D3","D4","D5","D6","D7","D8"],
                ["C1","C2","C3","C4","C5","C6","C7","C8"],
                ["B1","B2","B3","B4","B5","B6","B7","B8"],
                ["A1","A2","A3","A4","A5","A6","A7","A8"]
            ]

let case_plateau_pion =
            [
                ["tour-noir-1","cheval-noir-1","fou-noir-1","damme-noir","roi-noir","fou-noir-2","cheval-noir-2","tour-noir-2"],
                ["pion-noir-1","pion-noir-2","pion-noir-3","pion-noir-4","pion-noir-5","pion-noir-6","pion-noir-7","pion-noir-8"],
                ["vide","vide","vide","vide","vide","vide","vide","vide"],
                ["vide","vide","vide","vide","vide","vide","vide","vide"],
                ["vide","vide","vide","vide","vide","vide","vide","vide"],
                ["vide","vide","vide","vide","vide","vide","vide","vide"],
                ["pion-blanc-1","pion-blanc-2","pion-blanc-3","pion-blanc-4","pion-blanc-5","pion-blanc-6","pion-blanc-7","pion-blanc-8"],
                ["tour-blanc-1","cheval-blanc-1","fou-blanc-1","damme-blanc","roi-blanc","fou-blanc-2","cheval-blanc-2","tour-blanc"]
            ]


//transforme tour-blanc-1 --> tour-blanc
let caseTableauToNameImage = function(nom_case){
    let res ="vide"
    if(nom_case!="vide"){
        let tab = nom_case.split('-')
        res = tab[0]+"-"+tab[1]
    }
    return res
}

//affiche echequier a paryir du tableau de données
let afficherPlateau = function(){
    for (let l = 0; l < case_plateau.length; l++){
        for(let c = 0; c < case_plateau[l].length; c++){
            let name_case = case_plateau[l][c]
            let pion = case_plateau_pion[l][c]
            //si il y a un pion alors on affiche le pion sur la case
            if(pion!="vide"){
                let elt_image = document.querySelector(`#${name_case} img`)
                let chemin_image = `./images/${caseTableauToNameImage(pion)}.png`
                elt_image.src=chemin_image
            }
            //sinon on affiche rien
            else{
                let elt_image_vide = document.querySelector(`#${name_case} img`)
                elt_image_vide.src=""
            }
        }
    }
}
afficherPlateau()


//retourne position d'une case exemple : H1 --> [0,0]
let coordonneeCase = function(name_case){
    let res = []
    for(let l = 0; l < case_plateau.length; l++){
        for(let c = 0; c < case_plateau[l].length; c++) {
            if(case_plateau[l][c]==name_case){
                res.push(c)
                res.push(l)
            }
        }
    }
    return res
}

//deplace un pion d'une case à une autre
let deplacerPion = function(case_dep, case_arr){
    let [x_dep, y_dep] = coordonneeCase(case_dep)
    let [x_arr, y_arr] = coordonneeCase(case_arr)
    if(case_dep != case_arr){
        //on change le pion de case
        case_plateau_pion[y_arr][x_arr]=case_plateau_pion[y_dep][x_dep]
        //on met la case initiale à vide
        case_plateau_pion[y_dep][x_dep] = "vide"
    }
    afficherPlateau()
}
deplacerPion("G1","F1")
deplacerPion("H2","F3")

//mouvement possible --> renvoie touts les positions ou peut aller une pièce







