//domácí úkol-Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail,
// který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena 
//a připojí se doména fit.cvut.cz. Pro jméno Jana Procházková tak vznikne adresa prochjan@fit.cvut.cz.



//Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky. 
//Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky. 

let firstName = prompt("Zadejte své křestní jméno (bez diakritiky):").trim();
let lastName = prompt("Zadejte své příjmení (bez diakritiky):").trim();
//Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.

let firstNamePart = firstName.slice(0, 3); // První tři znaky jména
let lastNamePart = lastName.slice(0, 5); // Prvních pět znaků příjmení

//Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
let email = lastNamePart + firstNamePart + "@fit.cvut.cz";

// Vypsání výsledné e-mailové adresy do stránky
document.body.innerHTML += "<p>Vaše e-mailová adresa je: " + email + "</p>";

//vypsání do konzole 
console.log("Vaše e-mailová adresa: " + email);