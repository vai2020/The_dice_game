<body>
        <section class="parent_container">
        <h1> Welcome To The Exciting Game of Dice </h1>
       <div> <p id="Compbtn"> Computer</p>
        <!-- <img src="./images">  -->
        <p id=ans1> randomDice1 </p>
        <!-- <p id="CScorebtn"> Computer Score: <span id="compScore">0</span></p> -->
        </div>
        <hr color="black" size="3">
        <div> <p id="Playerbtn"> Player </p> 
        <p id=ans2> randomDice2 </p>
        <!-- <img class="imgages" src="./images"> -->
        <!-- <div> <p id="PScorebtn"> Player Score: <span id="playerScore">0</span></p> -->
        </div>
        <div id="final"></div>
        <div> <p id="winner"> <h3>Final Result: </h3> </p></div>
        
        <button id="Start" type="button" onclick="randomDice()"><h2>Start Game</h2> </button>
        
        <script>
        
        let computer = 0;
        let player = 0;

        function randomDice() {
        let randomDice = Math.floor(Math.random() * 6) + 1;
        document.getElementById("ans1").innerHTML = randomDice; //using the getElementById Method and innerHTML Property to access the randomly generated numbers for the computer produced by function randomDice.  Value stored in variable randomDice. //
        // document.querySelector(".img").attribute("src", randomDice);
         
        let randomDice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("ans2").innerHTML = randomDice2;
        
        // using the getElementById Method and innerHTML Property to access the randomly generated numbers for the player produced by function randomDice. Value stored in variable randomDice2.
        
        function gameScore() {
        if(randomDice > randomDice2) {
        let winner = winner + 1;
        document.getElementById("compScore").innerHTML = winner;
        }
        else if(randomDice < randomDice2) {
        let winner2 = winner2 + 1;
        document.getElementById("playerScore").innerHTML = winner2;
        }
        }
    
             
        // if(randomDice > randomDice2) {          //this set of codes is working//
        //     prompt("Computer Win. Do you want to play another game?");
        // }   else if(randomDice < randomDice2) {
        //     prompt("Player Win. Do you want to play another game?");
        // }   else {
        //     prompt("Tie Game. Roll the dice again!!")
        // }

        }

        </script>
        <script>
            $(document).ready(function() {
                  $("body").css("background","lightskyblue");
            });
        //     </script> 
        </section>
        <!-- <script src="jquery-3.4.1.min.js"></script>   -->
        <!--library-->
        <script src="defer"></script>
    </body>
    </html>