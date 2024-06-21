alert("working");
function myDictionary(){
    var Student = {
        Name: "Amir",
        Age: 23,
        Hometown: "Houston",
        Job: "Software Engineer"
    };
    delete Student.Hometown
    document.getElementById("Dictionary").innerHTML = Student.Hometown;
}