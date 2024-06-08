
    /*kod pridava forlumar s textovym polickem a tlacitkem k prihlaseni a odberu*/
	document.getElementById('newsletter-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Zabrání odeslání formuláře
    
        const email = document.getElementById('email').value;
    
    
        console.log(`Uživatel s e-mailem ${email} byl úspěšně přihlášen k odběru.`);
    });
    
    /*Zpráva o úspěšném přihlášení*/
    
    document.getElementById('newsletter-form').addEventListener('submit', function (event) {
        event.preventDefault(); /*zabrání odeslání emailu */
        
        const email = document.getElementById('email').value;
        const successMessage = document.createElement('p');
        successMessage.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`;
        document.body.appendChild(successMessage);
    });

    const emailInput = document.querySelector('#email'); // Vyberte textové pole podle jeho ID (v tomto případě 'email')

    emailInput.addEventListener('input', (event) => {
    // Tady můžete provést akce, které se mají stát při změně hodnoty v poli
    const enteredValue = event.target.value;
    console.log(`Uživatel zadal: ${enteredValue}`);
});