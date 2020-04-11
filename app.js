/*In order to roll the dice, we set up Math.random function which generates random numbers from 0 to 1 (including 0 but not including 1).  Since the results are in decimals, we add Math.floor and +1 to make it a whole number
 */

// let randomDice = Math.floor(Math.random() * 6) + 1;
    
//Experiment with a function randomDice to store the randomly generated number rather than in a variable
 function randomDice() {
     return Math.floor(Math.random() * 6) + 1;
    }
console.log(randomDice());
    