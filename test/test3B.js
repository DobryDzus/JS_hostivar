function registrace(){
    let jmeno1 = prompt("zadej jmeno");
    let jmeno2 = prompt("zadej prijmeni");
    console.log("vítejte " + jmeno1 + " s prijmenim " + jmeno2);
}

let teplotaC = Number(prompt("zadej stupne v celsia"));

function prevod(teplotaC) {
    return (teplotaC * 9/5) + 32;
}

registrace();
prevod(teplotaC);