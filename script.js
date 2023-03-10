//JavaScript Fundamentals – Part 1
//Code Challenge #1
//Mark and John are trying to compare their BMI (Body Mass Index)
/*
let MarkMass = prompt("enter marks mass",1);
let MarkHieght = prompt("enter marks Hieght",1);
let JohnMass = prompt("enter John mass",1);
let JohnHieght = prompt("enter John Hieght",1);

let MarkBMI = MarkMass / (MarkHieght **2);
let JohnBMI = JohnMass / (JohnHieght **2);

let markHigherBMI = MarkBMI > JohnBMI;
alert(markHigherBMI); */

//-----------------------------

//Code Challenge #2
//Use a template literal to include the BMI values in the outputs. Example: "Mark's
//BMI (28.3) is higher than John's (23.9)!"

/*
let MarkMass = prompt("enter marks mass",1);
let MarkHieght = prompt("enter marks Hieght",1);
let JohnMass = prompt("enter John mass",1);
let JohnHieght = prompt("enter John Hieght",1);

let MarkBMI = MarkMass / (MarkHieght **2);
let JohnBMI = JohnMass / (JohnHieght **2);

let markHigherBMI = MarkBMI > JohnBMI;

if(markHigherBMI)
    console.log(`Mark's BMI ${(MarkBMI)} is higher than John's ${(JohnBMI)}!`)
else
    console.log(`John's BMI ${(JohnBMI)} is higher than Mark's ${(MarkBMI)}!`) */

//-----------------------------

//Code Challenge #3
/* Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy */

/*
let dolphinAvgScore = 0; 
let koalasAvgScore = 0; 

for(let i = 0; i < 3; i++){
    dolphinAvgScore += +prompt(`enter dolphin score ${i+1}:`,0);
    koalasAvgScore += +prompt(`enter koalas score ${i+1}:`,0);

}

dolphinAvgScore /= 3;
koalasAvgScore /= 3;

if(dolphinAvgScore > koalasAvgScore && dolphinAvgScore >= 100)
    console.log("Dolphins win!")
else if(dolphinAvgScore < koalasAvgScore && koalasAvgScore >= 100)
    console.log("koalas win!");
else if(dolphinAvgScore == koalasAvgScore && dolphinAvgScore >= 100 && koalasAvgScore >= 100)
    console.log("Draw.");
else
    console.log("no team wins the trophy");
*/

//------------------------------

//Code Challenge #4
//tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

/*let tip = 0;
let billValue = prompt("enter the bill value:",100);
tip = billValue >= 50 && billValue <=300 ? (billValue * 15) / 100 : (billValue * 20) / 100;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value
${billValue + tip}`);*/

//-------------------------------
//JavaScript Fundamentals – Part 2
//Code Challenge #1

/*let calcAverage = (scoreOne, scoreTwo, scoreThree)=> (scoreOne + scoreTwo + scoreThree) / 3;

let avgDolphins = calcAverage(+prompt("first Dolphins score"), +prompt("second Dolphins score"), +prompt("third Dolphins score"))
let avgKoalas = calcAverage( +prompt("first Koalas score"), +prompt("second Koalas score"), +prompt("third Koalas score"))

function checkWinner(avgDolphins , avgKoalas){
    if(avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);

    else if(avgDolphins < avgKoalas && avgKoalas >= avgDolphins * 2)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    
    else
        console.log("no team win");
}       


checkWinner(avgDolphins, avgKoalas);
*/

//----------------------------------

//Coding Challenge #2
/*
let bills = [125,555,44];
let tips = [];
let total = [];

function calcTip(billValue){
    return billValue >= 50 && billValue <=300 ? (billValue * 15) / 100 : (billValue * 20) / 100;
}

for (let i = 0; i < bills.length; i++) {
    tips[i] =  calcTip(bills[i]);
    total[i] = bills[i] + tips[i];
    
}

console.log(tips);
console.log(total);*/

//------------------------------------

//Coding Challenge #3

/*
const MarkObj = {
    "fullName": "Mark Miller",
    "mass" : 92,
    "height" : 1.95,
    calcBMI(){
        this.BMI =  this.mass / (this.height **2);
        return this.BMI;
    }
}

const JohnObj = {
    "fullName": "John Smith",
    "mass" : 78,
    "height" : 1.69,
    calcBMI(){
        this.BMI =  this.mass / (this.height **2);
        return this.BMI;
    }
}

if(MarkObj.calcBMI() > JohnObj.calcBMI())
    console.log(`Mark's BMI (${MarkObj.BMI}) is higher than John's (${JohnObj.BMI})!`);
else if(MarkObj.calcBMI() < JohnObj.calcBMI())
    console.log(`John's BMI (${JohnObj.BMI}) is higher than Mark's (${MarkObj.BMI})!`);
else
    console.log(`equal ${MarkObj.BMI}`);*/


//------------------------------------

//Coding Challenge #4

/*let bills = [125,555,44];
let tips = [];
let totals = [];

function calcTip(billValue){
    return billValue >= 50 && billValue <=300 ? (billValue * 15) / 100 : (billValue * 20) / 100;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
    
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));*/

//------------------------------------------------
//Developer Skills & Editor Setup
//coding challenge #1

/*function printForecast(arr){
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        const temperature = arr[i];

        output = output.concat(`${temperature}ºC in ${i+1} days ...`)
    }

    console.log(output);
}

printForecast([17, 21, 23]);*/

//------------------------------------------------
//Data Structures, Modern Operators and Strings
//Coding Challenge #1

/*const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

let Players1 = game.players[0];
let Players2 = game.players[1];
let gk = Players1[0];
let fieldPlayers = Players1.slice(1);
let allPlayers = [...Players1,...Players2];
console.log(allPlayers);
let players1Final = [...Players1, "Thiago", "Coutinho", "Perisic"];
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

function printGoals (...names){
    names.forEach((value) => console.log(value));
    console.log(names.length);
}

//printGoals('Davies', 'Muller', 'Lewandowski' , 'Kimmich');
printGoals(...game.scored);

let lowerOdd = Object.values(game.odds).sort((a, b) => a - b)[0];

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

let winner = getKeyByValue(game.odds,lowerOdd);
console.log(game[winner]);*/

//----------------------------------------
//Coding Challenge #2

/*const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

game.scored.forEach((name,index) => console.log(`Goal ${index+1}: ${name}`) )
let averageOdds = 0;
for (const value of Object.values(game.odds)) {
    averageOdds += value;
}

console.log(averageOdds/ Object.keys(game.odds).length);

for (const item of Object.entries(game.odds)) {
    if(item[0] == "x")
        console.log(`Odd of draw: ${item[1]}`);
    else
        console.log(`Odd of Victory ${game[item[0]]}: ${item[1]}`);
}

let scorers = {};

for (const player of game.scored) {
    if(!(player in scorers))
        scorers[player] = 1;
    else
        scorers[player]++;
}

console.log(Object.entries(scorers));*/

//-----------------------------------------
//Coding Challenge #3

/*const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

let events = new Set(gameEvents.values());

gameEvents.delete(64);

let time = [...gameEvents.keys()].pop();
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

for (const item of gameEvents.entries()) {
    let output = " ";
    if(item[0] <= 45)
       output = output.concat("[FIRST HALF]");
    else
    output = output.concat("[Second HALF]");

    output = output.concat(` ${item[0]}: ${item[1]}`);
    console.log(output);
}*/

//--------------------------------------
//Coding Challenge #4
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector("button").addEventListener('click',function(){
    let text = document.getElementsByTagName("textarea")[0].value;
    let arr = text.split("\n");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split("_");
        let camel = word[0].toLowerCase()+word[1][0].toUpperCase()+word[1].slice(1).toLowerCase()+"\t";
        for (let j = 0; j < i+1; j++) {
            camel = camel.concat("✅");        
        }
        console.log(camel.trim());
    }
});*/

//-----------------------------------------
//A Closer Look at Functions
//Coding Challenge #1

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function (){
    let answer = +prompt("What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3: C++")
    if(!isNaN(answer) && answer >= 0 && answer < poll.options.length){
        poll.answers[answer]++;
    }
    else
        alert("please enter valid number");
    
}

const button = document.createElement("button");
button.innerText ="Answer poll";
document.body.append(button);

document.querySelector("button").addEventListener('click', function(){
    poll.registerNewAnswer();
    let func = displayResults.bind(poll);
    func("string");
})

function displayResults(type="array"){
    if(type=="array")
        console.log(this.answers);
    else if(type=="string")
        console.log(`Poll results are ${this.answers}`);
}

displayResults.call({answers : [1,5,6,8]},"string")