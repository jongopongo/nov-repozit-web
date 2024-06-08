
    //kod prida formular s textovym polem a tlacitkem k prihlaseni a odberu
	document.getElementById('newsletter-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Zabrání odeslání formuláře
    
        const email = document.getElementById('email').value;
    
    
        console.log(`Uživatel s e-mailem ${email} byl úspěšně přihlášen k odběru.`);
    });
    
    //Zpráva o úspěšném přihlášení
    
    document.getElementById('newsletter-form').addEventListener('submit', function (event) {
        event.preventDefault(); //melo by zabranit odeslani emailu
        
        const email = document.getElementById('email').value;
        const successMessage = document.createElement('p');
        successMessage.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`;
       
     document.body.appendChild(successMessage); //zpráva o přihlášení bude viditelná na stránce
     });
     
    const emailInput = document.querySelector('#email');

    emailInput.addEventListener('input', (event) => {
    
    const enteredValue = event.target.value;
    console.log(`Uživatel zadal: ${enteredValue}`);
});