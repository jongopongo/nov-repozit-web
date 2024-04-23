


document.body.innerHTML = "<h1>text</h1>"
document.body.textContent += "<h>text</h>"



const jmeno = prompt("Zadejte jmeno uzivatele:");
const pocetHodin = Number(prompt("Zadej pocet hodin zamestnance"));
const pocetHodinPrescasu =Number(prompt("Zadej pocet hodin prescasu"));
const hodinovka = 200
const vypocetMzdy = (pocetHodin * hodinovka) + (pocetHodinPrescasu * hodinovka + 100);
const celkovyPocetHodin = pocetHodin + pocetHodinPrescasu

document.body.innerHTML += "<p> Ahoj uživateli " + jmeno + "</p>";
document.body.innerHTML += "<p>Zamestnanec odpracoval - "+ celkovyPocetHodin + "hodin</p>";
document.body.innerHTML += "<p> Zamestnanec dostane plat - " + vypocetMzdy + "Kč .</p>";


const name = prompt ("Prosím, zadejte Vaše jméno:");
const age = Number(prompt ("Prosím, zadejte Váš věk:"));

document.body.innerHTML += "<p>" + name + ", věk: " + age + "</p>";


//const adresa = "Opletalova 33, 169 00 Praha 6"//
const adresa = {
    //vlastnost : hodnota
    ulice: "Opletalova",
    cisloPopisne: 33,
    psc: "735 19",
    mesto: "Praha 6",
    gps:{ 
        x:123212.1232112321,
        y:5452542.456456545,
    }
};
 
 adresa.ulice = "Mozartova"
 adresa.ctvrt = "Dejvice"

 document.body.innerHTML = "<p>Ulice:" + adresa.ulice + "</p>" + "<p>Cislo popisne:" + adresa.cisloPopisne + "</p>"

console.log(adresa)


const tridni = prompt("Zadej jmeno tridniho ucitele")
const nazevTridy = prompt("Zadej oznaceni tridy")
const trida = {}

trida.jmenoTridni = tridni
trida.jmenoTridy = nazevTridy

console.log(trida)



console.log(adresa);
console.log(adresa.gps.x);
console.log(adresa.gps.y);

document.body.innerHTML += "<p>Další obsah stránky</p>";

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free', 
    floor: 3,
  };

  //čistý nájem bez poplatků//

const rent = apartment.price.rent;
const currency = apartment.price.currency;
const netRentHTML = "<p>Čistý nájem: " + rent + " " + currency + "</p>";
document.body.innerHTML += netRentHTML;
  
// proměnné vypsané do stránky//
const city = apartment.city;
const district = apartment.district;
apartment.status = 'taken';
console.log(apartment.status); 

  //Dispozice bytu//
  document.body.innerHTML += "<p>Dispozice bytu: " + apartment.disposition + "</p>";
  document.body.innerHTML += "<p>Nájem: " + apartment.price.rent + "" + apartment.price.currency + "</p>";
  document.body.innerHTML += "<p>Plocha bytu: " + apartment.area.floorage + " " +apartment.area.units + "</p>";
  document.body.innerHTML += "<p>Město: " + city + "</p>";
  document.body.innerHTML += "<p>Městská část: " + district + "</p>";
 
//Knihovna

const book1 = {
  title: "Babička",
  author: "Božena Němcová",
  pageCount: 218,
  genre: "Beletrie",
  yearPublished: 1925,
  publisher: {
    name: "Albatros",
    location: "Praha"
  },
  rating: 4.5 // Hodnocení knihy na škále 1-5
};

// Vytvoření další knihy se stejnými vlastnostmi, ale jinými hodnotami
const book2 = {
  title: "Pýcha a předsudek",
  author: "Jane Austin",
  pageCount: 281,
  genre: "Román",
  yearPublished: 1960,
  publisher: {
    name: "Heureka",
    location: "Znojmo"
  },
  rating: 4.8 // Hodnocení knihy na škále 1-5
};

// Výpis informací o první knize
console.log("Book 1:");
console.log("Title:", book1.title);
console.log("Author:", book1.author);
console.log("Page Count:", book1.pageCount);
console.log("Genre:", book1.genre);
console.log("Year Published:", book1.yearPublished);
console.log("Publisher:", book1.publisher.name);
console.log("Publisher Location:", book1.publisher.location);
console.log("Rating:", book1.rating);

// Výpis informací o druhé knize
console.log("Book 2:");
console.log("Title:", book2.title);
console.log("Author:", book2.author);
console.log("Page Count:", book2.pageCount);
console.log("Genre:", book2.genre);
console.log("Year Published:", book2.yearPublished);
console.log("Publisher:", book2.publisher.name);
console.log("Publisher Location:", book2.publisher.location);
console.log("Rating:", book2.rating);