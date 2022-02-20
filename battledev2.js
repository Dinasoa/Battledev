const prompt =  require("prompt-sync")();

let numberOfButton = +prompt("Enter the total number of button: ");

const findButton = () => {
    let obj = {}
    for (let i = 0; i < numberOfButton; i++) {
        let buttonName = prompt("Enter the name of all cockpits: ")
      
        if(obj[buttonName]){
            obj[buttonName]++
        }
        else obj[buttonName] = 1
        
    }

    let newArr = Object.entries(obj)
   
    let button = []
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            if(newArr[i][1] == 2){
                button.push(newArr[i][0])
            }
        }
    }
    return button[0]
}
