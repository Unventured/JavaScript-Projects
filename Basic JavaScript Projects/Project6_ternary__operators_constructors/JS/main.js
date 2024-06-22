function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You're tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}
function Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You're old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote";
}
function avg_Function(){
    document.getElementById("Nested_Function").innerHTML = Average();
    function Average(){
        var x = 9;
        var y = 85
        var avg;
        function compute(){
            avg = (x + y)/2;
        }
        compute();
        return avg;
    }
}