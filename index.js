// document.getElementById("scoreWrapper").style.display = "none"

document.getElementById("calculatorButton").onclick = function() {
    
    // Calculating the Score

    userGewicht = document.getElementById("userGewicht").value;
    gedronkenGlazen = document.getElementById("gedronkenGlazen").value;
    tijdGeleden = document.getElementById("tijdGeleden").value;
    // lichaamsVocht = document.getElementById("lichaamsVocht").value;
    lichaamsVocht = document.getElementById("userSex").value
    console.log(lichaamsVocht);
    alcoholPromillage = ((gedronkenGlazen * 10)/(userGewicht * lichaamsVocht))-(((tijdGeleden / 60) - 0.5)*(userGewicht * 0.002));
    document.getElementById("promillageParagraph").innerHTML = alcoholPromillage

    // Displaying the Reference Image
    if (alcoholPromillage <= 0.5 ) {
        document.getElementById("referenceImage").src="img/opgewekt.png";
        document.getElementById("creditsDiv").style.display = "none"
        document.getElementById("scoreWrapper").style.display = "flex"
        document.getElementById("scoreWrapper").style.flexDirection = "column"
    }
}
