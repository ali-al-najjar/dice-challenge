window.onload = function(){
  let dice = ["./images/dice-one.svg","./images/dice-two.svg","./images/dice-three.svg","./images/dice-four.svg","./images/dice-five.svg","./images/dice-six.svg"];
  let die_one = document.getElementById("die-one");
  let die_two = document.getElementById("die-two");
  let status = document.getElementById("status");
  let die = document.getElementsByTagName("img");

function diceRoll(){
  let rolling_die_one = Math.floor(Math.random()*6);
  let rolling_die_two = Math.floor(Math.random()*6);
  let first_die = dice[rolling_die_one];
  let second_die = dice[rolling_die_two]
  die_one.src=first_die;
  die_two.src=second_die;
  // console.log(dice[rolling_die_one],dice[rolling_die_two]);
  // console.log(die_one,die_two);

  if(rolling_die_one > rolling_die_two){
      status.innerText="Player One Wins!";
  }else if(rolling_die_one < rolling_die_two){
      status.innerText = "Player Two Wins!";
  }else{
      status.innerText = "It's a DRAW!!"
  }
  }
  diceRoll();
}











