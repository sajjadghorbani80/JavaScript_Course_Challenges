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