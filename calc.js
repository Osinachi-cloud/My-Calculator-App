


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
        document.getElementById("entry-value").innerText=getFormattedNumber(num);
    }

}

function getFormattedNumber(num){
    if (num=="-"){
        return "";
    }
    var n= Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));

}

var operator = document.getElementsByClassName("operator");
for(var i=0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){

        if(this.id=="clear"){
            outputDisplay("");
            displayValue("");
        }

        else if(this.id=="backspace"){
            var output = reverseNumberFormat(entryValue()).toString();
            if(output){
                output = output.substr(0, output.length-1);
                displayValue(output);
            }
        }
        else{
            var output = entryValue();
            var history= inputDisplay();
            if(output!=""
            //  && history!=""
             ){
            //     if(isNaN(history[history.length-1])){
            //         history=history.substr(0,history.length-1)
            //     }

            // }
            // if(output!="" || history!=""){
            //     output=output==""?
                output = reverseNumberFormat(output);
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
var number = document.getElementsByClassName('number');

for(var i=0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        var output= reverseNumberFormat(entryValue());
        if(output !=NaN){
            output= output + this.id;
            displayValue(output);
        }

         

    });
}
console.log(8)