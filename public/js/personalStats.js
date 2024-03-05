const calculate = require('fitness-health-calculations');

// basal metabolic 
let myBmr = calculate.bmr('female', 22, 168, 65);
let totalCaloricNeeds = calculate.caloricNeeds('male', 22, 195, 95, 'high', 'gain', 'agressive');
