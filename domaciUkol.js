//domácí úkol převod teploty Fahrenheit na Celsius

// Zobrazení promptu pro zadání teploty ve stupních Fahrenheita
let fahrenheit = prompt("Zadejte teplotu ve stupních Fahrenheita:");
fahrenheit = Number(fahrenheit); //převod na číslo

//převede číslo 
let celsius = (fahrenheit - 32) * 5 / 9;

// Zaokrouhlení na dva desetinná místa
celsius = Math.round(celsius * 100) / 100;


console.log(fahrenheit + 23);

document.body.innerHTML += "<p>Převod Fahrenheit na Celsius: " + fahrenheit + " stupňů Fahrenheit = " + celsius + " stupňů Celsia</p>";