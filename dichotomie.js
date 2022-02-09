let numbers = [10 , 1 , 3, 4, 12 ,38]

const dichotomyFunction = (numbers,toFind) => {
    let sort = numbers.sort(function(a,b){
        return a-b
    })
    let half = Math.floor((sort.length-1)/2)
    if(toFind == sort[half]){
        return true
    }
    if(toFind>sort[half]){
        let tab = sort.slice(half,sort.length)
        for (let i = 0; i < tab.length; i++) {
            if(toFind == tab[i])
            return true
        }
    }
    if(toFind<sort[half]){
        let secondTab = sort.slice(0,half)
        for (let i = 0; i < secondTab.length; i++) {
            if(toFind == secondTab[i])
            return true
        }
    }
    else return false
}

console.log(dichotomyFunction(numbers,58));