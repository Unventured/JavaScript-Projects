function full_Sentence(){
    var part_1 = "The greatest glory in living ";
    var part_2 = "lies not in never falling, ";
    var part_3 = "but in rising every time ";
    var part_4 = "we fall. -Nelson Mandela";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){
    var sentence = "The way to get started is to quit talking and begin doing.";
    var section = sentence.slice(10,22);
    document.getElementById("Slice").innerHTML = section.toUpperCase();
    console.log(sentence.search("started"));
    console.log(sentence.valueOf());
}

function string_Method(){
    var num = 69;
    document.getElementById("Number_to_String").innerHTML = num.toString();
}

function precision_Method(){
    var num = 8591.598743258975724389654392;
    document.getElementById("Precision").innerHTML = num.toPrecision(11);
    console.log(num.toFixed(5));
}