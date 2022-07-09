function generateQr() {
    document.getElementById("qr-image").style.display = "block";
    let QrText = document.getElementById("text").value;
    if(QrText.trim().length == 0){
        document.getElementById("error").innerHTML = "please enter some text!";
        document.getElementById("img").style.display = "none";
    } else {
        document.getElementById("img").style.display = "block";
        document.getElementById("error").innerHTML = "";
        document.getElementById("img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QrText;
    }
}