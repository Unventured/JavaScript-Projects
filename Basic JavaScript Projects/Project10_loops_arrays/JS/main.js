function Call_Loop(){
    var Digit = "";
    var X = 1;
    while(X < 11){
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
var Instruments = ["Guitar", "Piano", "Drums", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function(){
    var Names = [];
    Names[0] = "Matt";
    Names[1] = "Drew";
    Names[2] = "Alex";
    Names[3] = "Zander";
    document.getElementById("Array").innerHTML = Names[2] + " is one of my closest friends.";
}

function constant_Function(){
    const Car = {type:"SUV", make:"Chevy", model:"Tahoe", color:"silver"};
    Car.color = "red";
    Car.year = "2014";
    document.getElementById("Constant").innerHTML = "I drive a " + Car.color + " " + Car.year + " " + Car.model + ".";
}

var Z = 82;
console.log(Z);
{
    let Z = 22;
    console.log(Z);
}
console.log(Z);

function return_Function2(){
    var name = "Amir";
    return name;
}

function return_Function(){
    document.getElementById("Return").innerHTML = "My name is " + return_Function2();
}

let Person = {
    name: "Matt",
    height: "6'0",
    age: "24",
    job: "server",
    description: function(){
        return Person.name + " is a " + Person.age + " year old " + Person.job + " who is about " + Person.height +"."
    }
}
function object_Function(){
    document.getElementById("Object").innerHTML = Person.description();
}
