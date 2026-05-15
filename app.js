var student = {
    name: "",
    type: "studen"
}

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
    document.getElementById('nanme'),addEventListener("keyup",keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(event){
    student.name = document.getElementById('name').value;

    var totalNameValue = 0;
    for (var i=0; i < student.name.length; i++){
        totalNameValue += student.name.charCodeAt(i);
    }

    //Insert resulto into page
    var output = "Total Numeric value of person's name is " + totalNameValue;
    document.getElementById('output').innerText = output;
}
