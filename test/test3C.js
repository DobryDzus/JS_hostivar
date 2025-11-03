function vek() {
    let udaj1 = prompt("zadej jmeno");
    let udaj2 = Number(prompt("zadej vek"));
    console.log("uzivatel " + udaj1 + " ma " + udaj2 + "let");
}

let delkastrany = Number(prompt("zadej delku strany ctverce v centimetrech"));

function vypocet(delkastrany){
    return delkastrany * delkastrany;
}

vek();
vypocet(delkastrany);