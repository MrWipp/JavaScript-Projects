
document.getElementById("button").onclick = function(){
    
    let temp = document.getElementById("inputted").value;

    if (Number.isInteger(Number(temp))){
        cel_checked = document.getElementById("C").checked;
        fah_checked = document.getElementById("F").checked;
    
        if(cel_checked && fah_checked){
            document.getElementById("warning").innerHTML = "Please Select One Scale Only.";
        }
        else if(cel_checked){
            document.getElementById("result").innerHTML = toCelsius(temp).toFixed(2) + " C°";
        }
        else if(fah_checked){
            document.getElementById("result").innerHTML = toFahren(temp).toFixed(2) + " F°";
        }
        else{
            document.getElementById("warning").innerHTML = "Please Select A Scale";
        }
    }
    else{
        document.getElementById("warning").innerHTML = "Please Type A Valid Temperature.";
    }


}


function toCelsius(fahrenheit){
    let result = Number((fahrenheit - 32) * 5/9);
    return result;
}

 
function toFahren(celsius){
    let result = Number((celsius *  9/5) + 32);
    return result;
}