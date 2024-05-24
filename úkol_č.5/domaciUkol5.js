

  function selectPlan(planNumber) {
    // Zrušíme výběr ze všech plánů
    const plans = document.querySelectorAll('.plan');
    plans.forEach(plan => {
      plan.classList.remove('plan--selected');
    });
  
    // Vybereme plán podle čísla
    const selectedPlan = document.getElementById(`plan${planNumber}`);
    if (selectedPlan) {
      selectedPlan.classList.add('plan--selected');
    }
  }
  
  // Testování funkce - vybere třetí plán (Mega)
  selectPlan(3);
  