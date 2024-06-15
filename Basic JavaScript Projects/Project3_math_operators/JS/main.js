function addition_Function(){
    var addition = 5 + 6;
    document.getElementById("add").innerHTML = "2 + 2 = " + addition;
} 

function subtraction_Function(){
    var subtraction = 9 - 3;
    document.getElementById("subtract").innerHTML = "9 - 3 = " + subtraction;
}

function multiplication_Function(){
    var multiplication = 6 * 9;
    document.getElementById("multiply").innerHTML = "6 x 9 = " + multiplication;
}

function division_Function(){
    var division = 84 / 12;
    document.getElementById("divide").innerHTML = "84 /  12 = " + division;
}

function more_Math(){
    var simple_Math = (2 + 2) * 9 / 3 - 5;
    document.getElementById("math").innerHTML = "2 plus 2, multiplied by 9, divided by 3, then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator(){
    var modulus = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus;
}

function negation_Operator(){
    var x = 15;
    document.getElementById("negation").innerHTML = -x;
}

function increment_Operator(){
    var x = 15;
    x++;
    document.getElementById("increment").innerHTML = x;
}

function randomNumber(){
    window.alert(Math.random() * 100);
}

