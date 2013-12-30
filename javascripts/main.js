var note = document.getElementById("note");
var getinfo = document.getElementById("getinfo");
getinfo.onclick = function() {
    console.log (note.value);
    if (note.value == ""){
        alert("you need input");
    }else{
        parsedata(note.value);
    }
}

function parsedata(data){
    var correctFormat = /NOTE OF(.*)>/.test(data);
    if( !correctFormat){
        alert("The string provided is incorrect");
        return;
    }
    var longString = data.match("NOTE OF(.*)>");
    var final = longString[1].replace(/:/g, "").replace(/-ON/g,"");
    alert(final);  
}

