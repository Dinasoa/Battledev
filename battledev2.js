const prompt =  require("prompt-sync")();

let numberOfButton = +prompt("Enter the total number of button: ");

// Function that searches the correct button among the buttons present in the cockpit 

const findButton = () => {
    let obj = {}
    for (let i = 0; i < numberOfButton; i++) {
        let buttonName = prompt("Enter the name of all cockpits: ")
      
        //Count the occurence of each buttons 
        
        if(obj[buttonName]){
            obj[buttonName]++
        }
        else obj[buttonName] = 1
        
    }

    let newArr = Object.entries(obj)
    let button = []
    
    //Here , we will find which of the buttons is repeated twice 
    
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            if(newArr[i][1] == 2){
                button.push(newArr[i][0])
            }
        }
    }
    return button[0]
}
