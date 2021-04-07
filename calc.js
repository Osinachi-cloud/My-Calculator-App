

// Section 1: declare all Querry
function inputDisplay(){
    return document.getElementById("input-display").innerText;
}

function outputDisplay(num){
     document.getElementById("input-display").innerText= num;
}

function entryValue(){
   return document.getElementById("entry-value").innerText;

}
function displayValue(num){
    if(num==""){
    document.getElementById("entry-value").innerText= num;

    }
    else{
        document.getElementById("entry-value").innerText=removeNegativeSign(num);
    }

}
// this is to return an empty value instead of a negative symbol only

function removeNegativeSign(num){
    if (num=="-"){
        return "";
    }
    // converting to string in order to have thousand separators (commas before every three digits)
    var n= Number(num);
    var value = n.toLocaleString("en");
    return value;
}

//  To convert the output back to a number from string
function convertToNumber(num){
    return Number(num.replace(/,/g,''));

}
// declare a Querry of the whole array of operators
var operator = document.getElementsByClassName("operator");
for(var i=0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){

        if(this.id=="delete-all"){
            outputDisplay("");
            displayValue("");
        }

        else if(this.id=="backspace"){
            var output = convertToNumber(entryValue()).toString();
            if(output){
                output = output.substr(0, output.length-1);
                displayValue(output);
            }
        }
        else if(this.id=="%"){
            var output = entryValue();
            var history = inputDisplay();
            if(output !=""){
                output = convertToNumber(output);
                history =history + output;
        
                if(history){
                    history=history/100;
                    outputDisplay("");
                    displayValue(history);
                }
                
            } 
        }
        else if(this.id=="."){
            var output = entryValue();
            var history = inputDisplay();
            if(output !=""){
                output = convertToNumber(output);
                history =history + output ;
               
                
                if(this.id){
                    history=history + this.id;
                    outputDisplay(history);
                    displayValue("")
                    
                }
                
            }  
        }
        else{
            var output = entryValue();
            var history= inputDisplay();
            if(output!=""){
            
                output = convertToNumber(output);
                history = history + output;
                if(this.id=="="){
                    var result = eval(history);
                    displayValue(result);
                    outputDisplay("");
                }
                else{
                    history=history+this.id;
                    outputDisplay(history);
                    displayValue("")
                }
            
        }
    }

    });
}


// declare the whole array of numbers

var number = document.getElementsByClassName('number');

for(var i=0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output= convertToNumber(entryValue());
        if(output !=NaN){
            output= output + this.id;
            displayValue(output);
        }

         

    });
}







