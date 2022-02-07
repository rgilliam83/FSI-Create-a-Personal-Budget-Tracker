let weeklyExpenses = 0;
let monthlyExpenses = 0;
let annualExpenses = 0;

window.prompt(weeklyExpenseQuestions[0]);

let weeklyExpenses = 0;
let monthlyExpenses = 0;
let annualExpenses = 0;

window.prompt(weeklyExpensesQuestions[0]);
let answer = window.prompt(weeklyExpenseQuestions[0])
console.log(answer);

let totalAnnualExpenses = annualExpenses + (monthlyExpenses*12) + (weeklyExpenses*4*12)
let state = { weeklyExpenses, monthlyExpenses, annualExpenses, totalAnnualExpenses }
let elements = document.querySelectorAll('[data-bind]')
elements.forEach( element => element.innerText = state[element.dataset.bind])