const prompt =  require("prompt-sync")();

let numberOfButton = +prompt("Enter the total number of buttons : ");

// Function that searches the correct button among the buttons present in the cockpit 

const findButton = () => {
    let obj = {}
    for (let i = 0; i < numberOfButton; i++) {
        let buttonName = prompt("Enter the name of each buttons in the cockpits: ")
      
        //Count the occurence of each buttons 
        
        if(obj[buttonName]){
            obj[buttonName]++
        }
        else obj[buttonName] = 1
        
    }
    //Here , we will find which of the buttons is repeated twice 
    for (button in obj){
        if(obj[button] == 2){
            return button;
        }
    }
}