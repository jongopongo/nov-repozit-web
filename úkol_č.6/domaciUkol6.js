function justFood(numberOfPeople) {
  const pricePerPerson = 100;
  const totalPrice = numberOfPeople * pricePerPerson;
  return `Catering od Just Food pro ${numberOfPeople} lidí za ${totalPrice} Kč`;
}

function yourMama(numberOfPeople) {
  const pricePerPerson = 500; 
  const totalPrice = numberOfPeople * pricePerPerson;
  return `Catering od Your Mama pro ${numberOfPeople} lidí za ${totalPrice} Kč`;
}

function flavourHaven(numberOfPeople) {
  const pricePerPerson = 3000; 
  const totalPrice = numberOfPeople * pricePerPerson;
  return `Catering od Flavour Haven pro ${numberOfPeople} lidí za ${totalPrice} Kč`;
}


function createEvent(eventName, numberOfPeople, cateringFunction) {
  const cateringMessage = cateringFunction(numberOfPeople);
  return `Událost ${eventName} s ${cateringMessage}`;
}


console.log(justFood(100)); 
console.log(yourMama(500)); 
console.log(flavourHaven(3000)); 
console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven));
console.log(createEvent("Firemní večírek", 50, justFood));
console.log(createEvent("Rodinná oslava", 30, yourMama));


