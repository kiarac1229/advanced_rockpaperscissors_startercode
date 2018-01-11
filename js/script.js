//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
// var userChoice = " ";
//         var computerChoice = " ";
//         var winner = "";
//         var choices = ["rock","paper","scissors"] 
        


// //FUNCTIONS
// console.log(choices.length);
// math.random();

/*global $*/
$(document).ready(function(){
        var userChoice;
        var winner;
        var choices = ["rock", "paper", "scissors"];
        function notValid(){
                alert("Invalid Input, try again");
                $("input[type=text], textarea").val("");
        }
        
        function RPS(finalCompChoice) {
                if(finalCompChoice===userChoice){
                        $("#result").html("DRAW");
                        winner = "none";
                }
                else if(finalCompChoice==="rock" && userChoice==="scissors"){
                        $("#result").html("you lose");
                        winner = "computer";
                }
                else if(finalCompChoice==="rock" && userChoice==="paper"){
                        $("#result").html("you win");
                        winner = "user";
                }
                else if(finalCompChoice==="paper" && userChoice==="scissors"){
                        $("#result").html("you win");
                        winner = "user";
                }
                else if(finalCompChoice==="paper" && userChoice==="rock"){
                        $("#result").html("you lose");
                        winner = "computer";
                }
                else if(finalCompChoice==="scissors" && userChoice==="rock"){
                        $("#result").html("you win");
                        winner = "user";
                }
                else if(finalCompChoice==="scissors" && userChoice==="paper"){
                        $("#result").html("you lose");
                        winner = "computer";
                }
        }
        

        
        function displayResult(){
                $("#index").hide();
                if(winner==="user"){
                        $("#youWon").show();
                }
                else if(winner==="computer"){
                        $("#youLost").show();
                }
                else if (winner==="none"){
                        $("#Draw").show();
                }
        }
        
        
        $("#userInput").keyup(function(event) {
                if (event.keyCode === 13) {
                        $("#shoot").click();
                }
        });
        
        $("#shoot").click(function(){
                var computerChoice = Math.floor(Math.random() * 3);
                var finalCompChoice = choices[computerChoice];
                userChoice=$("#userInput").val();
                userChoice = userChoice.toString().toLowerCase();
                if(userChoice!=="rock" && userChoice!== "paper" && userChoice!== "scissors"){
                        notValid();
                }
                else{
                  $(".yourMove").html(userChoice);
                  $(".computerMove").html(finalCompChoice);
                  RPS(finalCompChoice);
                  

                  displayResult();
                  console.log(userChoice + finalCompChoice + winner);
                  
                }
                
                
                
        });
        
        $(".again").click(function() {
            $("#index").show();
            $("#youWon, #youLost, #Draw").hide();
            $("#userInput").val("");
        });
        
});



// DOCUMENT READY FUNCTION

