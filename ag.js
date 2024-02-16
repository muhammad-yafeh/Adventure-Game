import inquirer from "inquirer";
class player {
    constructor(Name, energy) {
        this.name = Name;
        this.fuel = energy;
    }
    remainingFuel() {
        this.fuel -= 25; //this.fuel-25 
    }
}
async function game() {
    let userInput = await inquirer.prompt([
        {
            type: "input",
            name: "fighter",
            message: "enter your name"
        },
        {
            type: "list",
            name: "opponent",
            choices: ["dracula", "zombie", "hulk"]
        }
    ]);
    if (userInput.opponent == "dracula") {
        console.log(`${userInput.fighter} VS Dracula`);
    }
    if (userInput.opponent == "zombie") {
        console.log(`${userInput.fighter} VS Zombie`);
    }
    if (userInput.opponent == "hulk") {
        console.log(`${userInput.fighter} VS Hulk`);
    }
    let points = 0;
    let x = new player(userInput.fighter, 100);
    while (points !== 9) {
        let attack = await inquirer.prompt({
            type: "list",
            name: "attack",
            choices: ["super punch", "flying kick", "bomb"]
        });
        points = Math.floor(Math.random() * 10);
        console.log(`your points are ${points}`);
        if (points <= 5) {
            x.remainingFuel();
        }
        if (points > 5 && points <= 8) {
            console.log("well played");
        }
        if (points == 9) {
            console.log("you won");
        }
        else {
            console.log("keep trying");
        }
        if (x.fuel == 0) {
            console.log("you lose...you got <=5 points four times");
            break;
        }
    }
}
game();
