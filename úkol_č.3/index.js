// Skill update function
function updateSkill(skillId, value) {
    document.getElementById(skillId).value = value;
    document.getElementById(skillId + "-value").textContent = value;
  }
  
  // Asking the user to express skills
  let skill1 = prompt("Zadejte úroveň dovednosti HTML (0-100):");
  let skill2 = prompt("Zadejte úroveň dovednosti CSS (0-100):");
  let skill3 = prompt("Zadejte úroveň dovednosti JavaScript (0-100):");
  
  // Updating the sliders on the page
  updateSkill("skill1", skill1);
  updateSkill("skill2", skill2);
  updateSkill("skill3", skill3);


console.log('funguju!');
