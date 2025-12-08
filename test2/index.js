function spustit(){
    let jmeno = "Patrik";
    document.getElementById("privitani").innerHTML = "Vítejte, " + jmeno;
    document.body.style.fontFamily = "Helvetica";
    let cislo = Number(document.getElementById("prvni").innerHTML);
    document.getElementById("prvni").innerHTML = cislo + 1;
}

function zmenabarvy(){
        document.getElementById("zmenabarvy").style.backgroundColor = "green";
}