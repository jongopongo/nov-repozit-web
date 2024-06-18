
    /*kod prida formular s textovym polem a tlacitkem k prihlaseni a odberu
	document.getElementById('newsletter-form').
         addEventListener('submit', function (event) {
         addEventListener('submit',  (event)=> {
            event.preventDefault(); // Zabrání odeslání formuláře
    
        const email = document.getElementById('email').value;
    
    
       
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
*/
//kod prida formular s textovym polem a tlacitkem k prihlaseni a odberu
/** 
document
	.getElementById('newsletter-form')
*     👇 misto klasicke funkci pouzivame modernejsi arrow funkci
	 .addEventListener('submit', function (event) {
        .addEventListener('submit',  (event)=> {
		event.preventDefault(); // Zabrání odeslání formuláře

		const email = document.getElementById('email').value;
*      👇 tento kod nam nikcemu. Je to zbytecne dvakrat chytit ten stejny prvek jenom pro vypis v konzoli. Normalne ten vypis by fungoval v kodu, ktery se zacina na radku 23. Vsak je fajn vsechny cosole.log v hotovem kodu vymazat. 
		 console.log(
		 	`Uživatel s e-mailem ${email} byl úspěšně přihlášen k odběru.`
		 );
        
	});
*/
//Zpráva o úspěšném přihlášení

//pro snadnost hodime prvek form do promenne, protoze s nim budeme muset manipulovat
const formElm = document.getElementById('newsletter-form');
// 👇 misto klasicke funkci pouzivame modernejsi arrow funkci
formElm.addEventListener('submit', event => {
	event.preventDefault(); //melo by zabranit odeslani emailu

	const email = document.getElementById('email').value;
	
	
	const successMessage = document.createElement('p');
	successMessage.id = 'success-message';
	successMessage.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`;
	
	document.body.appendChild(successMessage); //zpráva o přihlášení bude viditelná na stránce
	formElm.innerHTML = ''; //vymazani inputu
	formElm.appendChild(successMessage); //zpráva o přihlášení bude viditelná na stránce a nahradi puvodni obsah 
});

const emailInput = document.querySelector('#email');
const btnElm = document.querySelector('button');
emailInput.addEventListener('input', event => {
	const enteredValue = event.target.value;
	if (enteredValue === '' || !enteredValue.includes('@')) {
		emailInput.classList.add('invalid');
        btnElm.setAttribute('disabled', 'true');
	} else {
		emailInput.classList.remove('invalid');
		btnElm.removeAttribute('disabled');
	}
	console.log(`Uživatel zadal: ${enteredValue}`);
});











