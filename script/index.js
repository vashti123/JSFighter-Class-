const START_HP = 20;
const START_SP = 10;
const DEFAULT_ATK = 5;
const DEFAULT_DEF = 5;
const DEFAULT_TEK = 5;

//sets constants names
const P0NAME = 'Crash'
const P0CHARA = 'crashr'
const P1NAME = 'Sam'
const P1CHARA = 'saml'

let playerTurn = false;
let logging = true;

let Player0;
let Player1;

//varible for finding % of players HP used for the HealthBar
let player0PercentHP;
let player1PercentHP;
let player0PercentSP;
let player1PercentSP;

// declared variables for the boxes
let gameBox;
let headerBox;
let graphicsBox;
let barsBox;
let controlsBox;
let outputBox;

class Fighter {
  constructor(name, charaName) {
    //'contructor' is in all JS classes
    // It gets run immediately when a new object is created from a class

    // Set all of our default values for this new fighter here
    this.name = name;
    this.hp = START_HP;
    this.sp = START_SP;
    this.atk = DEFAULT_ATK;
    this.def = DEFAULT_DEF;
    this.tek = DEFAULT_TEK;
    this.charaName = charaName;
  }

  //this logs who attacked who
  attack(target) {
    console.log(this.name + ' attacked ' + target.name);
    target.hp = Math.max(0, target.hp - Math.floor(Math.random() * 4))
    console.log(target.hp);
    graphicsBox.innerHTML = '<img id ="' + Player0.charaName + '" src="img/' + Player0.charaName + '_attack.png" alt="' + Player0.name + '" class="fighterIMG">'
    graphicsBox.innerHTML += '<img id ="' + Player1.charaName + '" src="img/' + Player1.charaName + '_hit.png" alt="' + Player1.name + '" class="fighterIMG">'

    if (koCheck(target.hp) == true) {
      graphicsBox.innerHTML = '<img id ="' + Player0.charaName + '" src="img/' + Player0.charaName + '_idle.png" alt="' + Player0.name + '" class="fighterIMG">'
      graphicsBox.innerHTML += '<img id ="' + Player1.charaName + '" src="img/' + Player1.charaName + '_ko.png" alt="' + Player1.name + '" class="fighterIMG">'
      endTurn();
  }

  single(target) {
    this.attack(target);
    }

  }

  double(target) {
    this.attack(target);
    this.attack(target);
  }

  //this logs that they recovered
  recover() {
    console.log('Recovered!');
  }
}


function startup() {
  Player0 = new Fighter(P0NAME, P0CHARA);
  Player1 = new Fighter(P1NAME, P1CHARA);

  //this makes a shortcut for 'document.getElementById'
  gameBox = document.getElementById('gameBox');
  headerBox = document.getElementById('headerBox');
  graphicsBox = document.getElementById('graphicsBox');
  barsBox = document.getElementById('barsBox');
  controlsBox = document.getElementById('controlsBox');
  outputBox = document.getElementById('outputBox');


  //this shows the fighter images in the graphics box
  graphicsBox.innerHTML = '<img id ="' + Player0.charaName + '" src="img/' + Player0.charaName + '_idle.png" alt="' + Player0.name + '" class="fighterIMG">'
  graphicsBox.innerHTML += '<img id ="' + Player1.charaName + '" src="img/' + Player1.charaName + '_idle.png" alt="' + Player1.name + '" class="fighterIMG">'


  console.log("My name is " + Player0.name + " and my ATK is " + Player0.atk)
  console.log("My name is " + Player1.name + " and my ATK is " + Player1.atk)

  showControls() //runs the showControls() function
  updateBars() //runs the updateBars() function
}

function showControls() {
  //checks to see which players turn it is and show the appropriate controls
  if (playerTurn) {
    //show buttons for player1 and overwrites player0's controls
    controlsBox.innerHTML = '<button type="button" name="attack" onclick="Player1.single(Player0)">Single Attack!</button>'
  } else {
    //show buttons for player0 and overwrites player1's controls
    controlsBox.innerHTML = '<button type="button" name="attack" onclick="Player0.single(Player1)">Single Attack!</button>'
  }
}
//checks the target's HP is less than or equal to 0, Then retuns true or false.
function koCheck(target, amount) {
  target.hp = target.hp - amount;
  if (target.hp <= 0) {
    return true;
  } else {
    return false;
  }
}


function updateBars() {
  //calculates the percent of HP
  player0PercentHP = (Player0.hp / START_HP) * 100
  player1PercentHP = (Player1.hp / START_HP) * 100
  player0PercentHP = (Player0.sp / START_SP) * 100
  player1PercentHP = (Player1.sp / START_SP) * 100

  //Makes sure Player0's health is not greater than 100% or less than 0%
  if (player0PercentHP <= 0) {
    player0PercentHP = 0
  } else if (player0PercentHP > 100) {
    player0PercentHP = 100
  } else {
    player0PercentHP = player0PercentHP
  }

  //Makes sure Player1's health is not greater than 100% or less than 0%
  if (player1PercentHP <= 0) {
    player1PercentHP = 0
  } else if (player1PercentHP > 100) {
    player1PercentHP = 100
  } else {
    player1PercentHP = player1PercentHP
  }

  //Makes sure Player0's SP is not greater than 100% or less than 0%
  if (player0PercentSP <= 0) {
    player0PercentSP = 0
  } else if (player0PercentSP > 100) {
    player0PercentSP = 100
  } else {
    player0PercentSP = player0PercentSP
  }

  //Makes sure Player1's SP is not greater than 100% or less than 0%
  if (player1PercentSP <= 0) {
    player1PercentSP = 0
  } else if (player1PercentSP > 100) {
    player1PercentSP = 100
  } else {
    player1PercentSP = player1PercentSP
  }
  barsBox.innerHTML = ''
  barsBox.innerHTML += 'P0<div class="hpBar"><div style="height:' + player0PercentHP + '%; width: 100%;" id="p0HPfill" class="HPfill"></div></div>'
  barsBox.innerHTML += '<div class="spBar"><div style="height:' + player0PercentSP + '%; width: 100%;" id="p0SPfill" class="SPfill"></div></div>'
  barsBox.innerHTML += 'P1<div class="hpBar"><div style="height:' + player1PercentHP + '%; width: 100%;" id="p1HPfill" class="HPfill"></div></div>'
  barsBox.innerHTML += '<div class="spBar"><div style="height:' + player1PercentSP + '%; width: 100%;" id="p1SPfill" class="SPfill"></div></div>'
}

function hideContols() {
  controlsBox.innerHTML = "";
}

function hideControls (){
  // hides the player controls after one players hp reaches 0
    controlsBox.innerHTML = '';
}

function koCheck(target, amount) {
  // this checks the current hp and subtracts the damage
  target.hp = target.hp - amount;
  console.log(target.hp)

  // this checks the current players health and determines whether he has been KO'd
  if (target.hp <= 0){
    return true
  }else {
    return false
  }
}
