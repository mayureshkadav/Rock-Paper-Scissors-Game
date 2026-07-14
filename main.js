var userchoice;

//=======================================================================================================================================
// User Choice
var options = document.querySelectorAll(".choice");

options.forEach((value) => {
    console.log(value);

    value.addEventListener("click", () => {
        var user_att = value.getAttribute("id");
        play_game(user_att);
    });
});

//================================================================================================
// Computer generated value
var computer = () => {
    var arr1 = ["rock", "paper", "scissor"];
    var rand = Math.floor(Math.random() * 3);
    return arr1[rand];
};


//==========================================================================================
var user_score=0;
var computer_score=0;
//==========================================================================================
// Draw Game
function draw_game() {

    
    console.log("The game is a draw");
     var edit1=document.querySelector("#result").textContent="The game is a draw"
     user_score++;
     computer_score++;
      var score_playe1=document.querySelector("#score-player").textContent=user_score;
      var score_playe1=document.querySelector("#score-comp").textContent=computer_score;

}

////==========================================================================================


//==========================================================================================
// Show Winner
function show_winner(user_win) {
    if (user_win) {
        user_score++;
        var edit1=document.querySelector("#result").textContent="User Wins 🎉"
        console.log("User Wins 🎉");
        var score_playe1=document.querySelector("#score-player").textContent=user_score;
    } else {
        computer_score++;
        console.log("Computer Wins 😢");
        var edit1=document.querySelector("#result").textContent="Computer Wins 😢"
        var score_playe1=document.querySelector("#score-comp").textContent=computer_score;
    }
}

//================================================================================================
// Compare User and Computer Choice
function play_game(user_att) {

    const user_choice = user_att;
    const comp_choice = computer();

    let user_win;

    console.log("User Choice:", user_choice);
    console.log("Computer Choice:", comp_choice);

    // Draw
    if (user_choice === comp_choice) {
        draw_game();
        return;
    }

    // Rock
    if (user_choice === "rock") {
        user_win = (comp_choice === "paper") ? false : true;
    }

    // Paper
    else if (user_choice === "paper") {
        user_win = (comp_choice === "rock") ? true : false;
    }

    // Scissor
    else if (user_choice === "scissor") {
        user_win = (comp_choice === "rock") ? false : true;
    }

    show_winner(user_win);
}