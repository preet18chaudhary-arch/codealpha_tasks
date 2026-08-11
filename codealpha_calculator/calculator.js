const display = document.getElementById("display");

// Add value to display
function appendValue(value){
    display.value += value;
}

// Clear screen
function clearDisplay(){
    display.value = "";
}

// Delete last character
function deleteLast(){
    display.value = display.value.slice(0,-1);
}

// Calculate result
function calculate(){

    try{

        if(display.value==="") return;

        display.value = eval(display.value);

    }catch{

        display.value = "Error";

        setTimeout(()=>{
            display.value="";
        },1000);
    }
}

// Keyboard Support
document.addEventListener("keydown",function(e){

    const key = e.key;

    if(!isNaN(key) || "+-*/.".includes(key)){
        appendValue(key);
    }

    else if(key==="Enter"){
        e.preventDefault();
        calculate();
    }

    else if(key==="Backspace"){
        deleteLast();
    }

    else if(key==="Escape"){
        clearDisplay();
    }
});