var G = 69;
function correct(){
    var Q = 31;
    console.log(G + Q);
}
function wrong(){
    console.log(Q + 69);
}
correct();
wrong();

function get_Date(){
    Time = new Date().getHours();
    if (Time < 12){
        document.getElementById("Greeting").innerHTML = "Good morning";
    }
    else if(Time >= 12 == Time < 18){
        document.getElementById("Greeting").innerHTML = "Good Afternoon";
    }
    else{
        document.getElementById("Greeting").innerHTML = "How are you this evening?";
    }
}

function get_Month(){
    month = new Date().getMonth();
    if(month < 6){
        document.getElementById("Month").innerHTML = "We're still not halfway through 2024";
    }
    else{
        document.getElementById("Month").innerHTML = "We're almost done with 2024";
    }
}