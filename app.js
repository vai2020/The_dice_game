/*In order to roll the dice, we set up Math.random function which generates random numbers from 0 to 1 (including 0 but not including 1).  Since the results are in decimals, we add Math.floor and +1 to make it a whole number and exclude 0
 */




//Experiment with a function randomDice below to store the randomly generated number rather than in a variable
//  function randomDice() {
//     return Math.floor(Math.random() * 6) + 1;
// }
// console.log(randomDice());

//Experient with jQuery below to store the random numbers

// $(document).ready(function() {
//     $("img").click(function() {
//         let randomDice = Math.floor(Math.random() * 6) + 1;
//     });
    
// });

// console.log(randomDice);

let computerScore = 0;
let playerScore = 0;

if(ans1>ans2) {
    let computerScore = computerScore + 1;
} else if(ans1<ans2) {
    let playerScore = playerScore = 1;
}
    