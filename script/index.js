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

// declared variables for the boxes and healthbar filling div layers
let gameBox;
let headerBox;
let graphicsBox;
let barsBox;
let controlsBox;
let outputBox;
let p0HPfill;
let p0SPfill;
let p1HPfill;
let p1SPfill;

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
  }

  single(target) {
    this.attack(target);
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
  p0HPfill = document.getElementById('p0HPfill');
  p0SPfill = document.getElementById('p0SPfill');
  p1HPfill = document.getElementById('p1HPfill');
  p1SPfill = document.getElementById('p1SPfill');


  //this shows the fighter images in the graphics box
  graphicsBox.innerHTML = '<img id ="' + Player0.charaName + '" src="img/' + Player0.charaName + '_idle.png" alt="' + Player0.name + '" class="fighterIMG">'
  graphicsBox.innerHTML += '<img id ="' + Player1.charaName + '" src="img/' + Player1.charaName + '_idle.png" alt="' + Player1.name + '" class="fighterIMG">'


  console.log("My name is " + Player0.name + " and my ATK is " + Player0.atk)
  console.log("My name is " + Player1.name + " and my ATK is " + Player1.atk)

  showControls() //runs the showControls() function
  updateBars() //runs the updateBars() function
}

function showControls() {
  //checks to see which players turn it is and show the apropriate controls
  if (playerTurn) {
    //show buttons for player1 and overwrites player0's controls
    controlsBox.innerHTML = '<button type="button" name="attack" onclick="Player1.single(Player0)">Single Attack!</button>'
  } else {
    //show buttons for player0 and overwrites player1's controls
    controlsBox.innerHTML = '<button type="button" name="attack" onclick="Player0.single(Player1)">Single Attack!</button>'
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
  }

  //Makes sure Player1's health is not greater than 100% or less than 0%
  if (player1PercentHP <= 0) {
    player1PercentHP = 0
  } else if (player1PercentHP > 100) {
    player1PercentHP = 100
  }

  //Makes sure Player0's SP is not greater than 100% or less than 0%
  if (player0PercentSP <= 0) {
    player0PercentHP = 0
  } else if (player0PercentSP > 100) {
    player0PercentHP = 100
  }

  //Makes sure Player1's SP is not greater than 100% or less than 0%
  if (player1PercentSP <= 0) {
    player1PercentSP = 0
  } else if (player1PercentSP > 100) {
    player1PercentSP = 100
  }

  p0HPfill.style.width = player0PercentHP
  p0HPfill.style.height = '100%'

  p0SPfill.style.width = player0PercentSP
  p0SPfill.style.height = '100%'

  p1HPfill.style.width = player1PercentHP
  p1HPfill.style.height = '100%'

  p1SPfill.style.width = player1PercentSP
  p1SPfill.style.height = '100%'
}
/*

MHW = 'delicious'

MHWoutput > MHWinput

*/
