// Basis variabelen
let score = 0;
let klik = 1;

// HTML elementen
let scoretekst = document.querySelector("#scoretekst");
let diamant = document.querySelector("#diamant");

// Klik op diamant
diamant.addEventListener("click", function () {
  score += klik;
  scoretekst.textContent = score;

  klikGeluid.play();

  updateBericht();
});

/* UPGRADES */

let kleineUpgrade = document.querySelector("#upgradeKlein");
let middelUpgrade = document.querySelector("#upgradeMiddel");
let groteUpgrade = document.querySelector("#upgradeGroot");

kleineUpgrade.addEventListener("click", function () {
  if (score >= 10) {
    score -= 10;
    klik += 1;


    updateBericht();
  }
});

middelUpgrade.addEventListener("click", function () {
  if (score >= 25) {
    score -= 25;
    klik += 5;


    updateBericht();
  }
});

groteUpgrade.addEventListener("click", function () {
  if (score >= 50) {
    score -= 50;
    klik += 10;


    updateBericht();
  }
});

/* GOUDEN DIAMANT */

let goudendiamant = document.querySelector("#goudendiamant");

setInterval(function () {
  let kans = Math.random();

  if (kans < 1) {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);

    goudendiamant.style.left = x + "px";
    goudendiamant.style.top = y + "px";

    goudendiamant.style.display = "block";

    setTimeout(function () {
      goudendiamant.style.display = "none";
    }, 2000);
  }
}, 5000);

goudendiamant.addEventListener("click", function () {
  score += 50;

  goudendiamant.style.display = "none";

  updateBericht();
});

/* PIKHOUWEEL */

let autoScore = 0;
let pikhouweelknop = document.querySelector("#pikhouweelknop");

pikhouweelknop.addEventListener("click", function () {
  if (score >= 100) {
    score -= 100;
    autoScore += 1;


    updateBericht();
  }
});

setInterval(function () {
  score += autoScore;


  updateBericht();
}, 1000);

/* GELUID */

let klikGeluid = document.querySelector("#klikGeluid");

/* BERICHT */

let bericht = document.querySelector("#bericht");

function updateBericht() {
  if (score < 50) {
    bericht.textContent = "Klik maar door!";
  } else if (score < 100) {
    bericht.textContent = "Lekker bezig!";
  } else if (score < 200) {
    bericht.textContent = "Blijf doorgaan!";
  } else {
    bericht.textContent = "Wow, jij hebt veel!";
  }
}