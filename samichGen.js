// Sandwich components
//bread
const bread = ['white Bloomer', 'seedy Brown', 'tiger', ' french baguette', 'sour dough']

//Main filling
const main = ['chicken', 'beef', 'ham', 'tuna', 'cheese', 'meatballs', 'falafel', 'bacon', 'crisps']

//salad
const salad = ['tomato', 'lettuce', 'onion', 'cucumber','pepper', 'sweetcorn', 'jalapenos', 'olives']

//Sandwich Gen
function makeSandwich() {
    let breadChoice = bread[Math.floor(Math.random() * 5)];
    let mainChoice = main[Math.floor(Math.random() * 8)];
    //let saladAmount = Math.floor(Math.random() * (8 - 2 + 1) + 2)
    let saladChoice = salad[Math.floor(Math.random() * 8)];
    let withCheese = Math.floor(Math.random * 1);
    let firstPart = `Your sandwich will be ${mainChoice}`;
    let secondPart = '';
    if (mainChoice != 'cheese' || mainChoice != 'crisps' && withCheese === 1) {
        secondPart = ` with cheese and ${saladChoice}, on ${breadChoice} bread.`;
    } else if (mainChoice === 'crisps') {
        secondPart = ` on ${breadChoice}.`;
    } else {
        secondPart = ` and ${saladChoice}, on ${breadChoice} bread.`;
    }
     let newSando = firstPart + secondPart;
     document.querySelector('h1').innerHTML = newSando
}
