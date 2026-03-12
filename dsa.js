const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


// Problems Array
const problems = [
"Engine failure",
"Battery dead",
"Tyre puncture",
"Engine overheating",
"Fuel empty"
];


// Solutions Array
const solutions = [
"Check fuel level, spark plug and ignition system.",
"Try jump starting the vehicle or replace the battery.",
"Replace the tyre with spare tyre or repair the puncture.",
"Stop the vehicle and check coolant level.",
"Refill the fuel tank."
];


// Mechanics Array
const mechanics = [
{name:"Ravi Mechanics", phone:"9876543210", rating:4},
{name:"Balaji Auto Works", phone:"9123456780", rating:5},
{name:"SR Bike Point", phone:"9988776655", rating:3},
{name:"City Car Care", phone:"9090909090", rating:4}
];



console.log("\n===== SMART VEHICLE ASSISTANCE SYSTEM =====\n");

console.log("Step 1: Select your vehicle problem\n");

// Display problems
for(let i=0;i<problems.length;i++){
console.log((i+1)+". "+problems[i]);
}


// Ask user to select problem
rl.question("\nEnter problem number: ", function(choice){

let index = choice-1;

if(index>=0 && index<problems.length){

console.log("\nYou Selected: "+problems[index]);


// Step 2 : Show Solution
console.log("\nStep 2: Suggested Solution");
console.log(solutions[index]);


// Step 3 : Show Mechanics
console.log("\nStep 3: Nearby Mechanics\n");

for(let m of mechanics){

console.log(m.name);
console.log("Phone:",m.phone);
console.log("Rating:",m.rating);
console.log("---------------------");

}

}
else{

console.log("Invalid problem number");

}

console.log("\nThank you for using Smart Vehicle Assistance System");

rl.close();

});