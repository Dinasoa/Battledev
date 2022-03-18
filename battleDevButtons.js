const prompt =  require("prompt-sync")();

let numberOfButton = +prompt("Enter the total number of buttons : ");

// Function that searches the correct button among the buttons present in the cockpit 

const findButton = () => {
    let obj = {}
    for (let i = 0; i < numberOfButton; i++) {
        let buttonName = prompt("Enter the name of each buttons in the cockpits: ")
      
        //Count the occurence of each buttons 
        
        if(obj[buttonName]){
            obj[buttonName]++ //If the name of the button repeats , so we will add the number of occurence of its button
        }
        else obj[buttonName] = 1 // else , it's only repeated once 
        
    }
    //Here , we will find which of the buttons is repeated twice 
    for (button in obj){
        if(obj[button] == 2){ //Checking the button's occurence if it's equal to 2 
            return button; //Return the name of the buutton
        }
    }
}
