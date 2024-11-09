const speach=new SpeechSynthesisUtterance();
function updateB1(){
    var textToSpesch=document.getElementById("textToSpesch").value;
    if(textToSpesch.trim()!=="")
    {
        speach.text=textToSpesch;
        speach.rate=1
        speach.volume=1
        speach.pitch=1
        window.speechSynthesis.speak(speach)
    }
    else{
        alert("noting")
    }

}