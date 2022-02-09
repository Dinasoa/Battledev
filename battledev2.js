const prompt = require("prompt-sync")();
let nbrebouton = +prompt("Saisir le nombre total des cockpits: ")

let obj = {}
for(let i = 0 ; i<nbrebouton ; i++){
    let nomBouton = prompt ("Saisir le nom de chaque cockpit: ")

    if(obj[nomBouton])
    obj[nomBouton]++
    else obj[nomBouton] = 1

}

let newTab = Object.entries(obj)
console.log(newTab);

for (let i = 0; i < newTab.length; i++) {
    for (let j = 0; j < newTab[i].length; j++) {
        console.log(newTab[i]);
        if(newTab[i][1]==2){
            console.log(newTab[i][0])
        }
    }
}
