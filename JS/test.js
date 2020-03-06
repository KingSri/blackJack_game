//////////////////
//Starter Objects
/////////////////

const player = {
  money: 1000,
  hand: [],
  score: 0
}

const dealer = {
  hand: [],
  score: 0
}

document.getElementById('playerHand').innerHTML =  `Player Hand:`;
document.getElementById('dealerHand').innerHTML =  `Dealer Hand:`;
document.getElementById("moneyValue").innerHTML = "Current Amount: $" + player.money;
document.getElementById("button4Betting").max = player.money;
document.getElementById('playerScore').innerHTML = "Your Score: " + player.score;
document.getElementById('dealerScore').innerHTML = "Dealer's Score: " + dealer.score;








//bet function



//////
//deal
//////
//
  const deckOfCards = {
    deck: [],
    cardSuits : ['Diamonds', 'Hearts', 'Spades', 'Clubs'],
    cardValue : ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'],

    buildDeck() {

      //console.log('in buildDeck lala');
      for (let i =0; i<this.cardSuits.length; i++){
        for (let j=0; j<this.cardValue.length; j++){
          let val = this.cardValue[j];
          if (val == 'Jack' || val == 'Queen' || val == 'King'){
            val = 10;
          }
          else if (val == 'Ace'){
            val = 11;
          }
          else {
            val = this.cardValue[j];
          }

          let card = {CardValue:this.cardValue[j], cardSuit: this.cardSuits[i], NumericValue: val};
          this.deck.push(card);
          //console.log(this.deck);

        }
      }
      return this.deck;
    },
      dealDeck(shuffledDeckArray){
        let cardsInHands = 2;
        let i = 0;
        let condensedDeck = shuffledDeckArray;
        //console.log(condensedDeck);
        while(i<cardsInHands){
          player.hand.push(condensedDeck[i]);
          //console.log(player.hand);
          condensedDeck.splice(i,1);
          //console.log(condensedDeck);
          dealer.hand.push(condensedDeck[i+cardsInHands]);
          //console.log(dealer.hand);
          condensedDeck.splice(i+cardsInHands,1);
          i++;
        }
        console.log('------');
        console.log(player.hand);
        console.log(dealer.hand);
      },

  //shuffling
  //*function derived from Mike Bostock's Fisher-Yates Shuffle function
  //website:
//goes through cards array  and randomizes the position of the card at given index

    shuffleDeck(array) {
      let c = array.length, a, b;
      console.log(c);

      while (c){
        b = Math.floor(Math.random() * c--);


        a = array[c];
        array[c]= array[b];
        array[b] = a;
      }
      return array;
    },

    startGame() {
      let deck = this.buildDeck();
      let shuffledCards = this.shuffleDeck(deck);
      this.dealDeck(shuffledCards);
      player.score = player.hand[0].NumericValue + player.hand[1].NumericValue;
      //console.log("player score:", player.score);
      dealer.score = dealer.hand[0].NumericValue + dealer.hand[1].NumericValue;
    },
  }

function beginBlackjack(event){
  let bettingValue = document.getElementById('button4Betting').value;
  let currentAmount = document.getElementById('moneyValue');
  currentAmount.innerHTML = "Current Amount: $" + (player.money - bettingValue);
  deckOfCards.startGame();
}
const btn_a = document.querySelector('#beginGame');
btn_a.addEventListener('click', beginBlackjack);



  /////////////
  //Bet Button
  ////////////

  function getInputValue(event){
    // //setting HTML elements equal to corresponding Javascript code
    // let bettingValue = document.getElementById('button4Betting').value;
    // let currentAmount = document.getElementById('moneyValue');
    // currentAmount.innerHTML = "Current Amount: $" + (player.money - bettingValue);
    // //starting game
    // deckOfCards.startGame();
    //storing values resulted from bet
    document.getElementById('playerHand').innerHTML =  `Player Hand: ${player.hand[0].CardValue} of ${player.hand[0].cardSuit}, ${player.hand[1].CardValue} of ${player.hand[1].cardSuit}`;
    document.getElementById('playerScore').innerHTML = "Your score: " + player.score;
    document.getElementById('dealerHand').innerHTML =  `Dealer Hand: ${dealer.hand[0].CardValue} of ${dealer.hand[0].cardSuit}, ${dealer.hand[1].CardValue} of ${dealer.hand[1].cardSuit}`;
    document.getElementById('dealerScore').innerHTML = "Dealer's score: " + dealer.score;
    document.getElementById('betting').disabled = false;
    document.getElementById('stay').disabled = false;
    document.getElementById('hit-me').disabled = false;
    scoreCheck();
    moneyCheck();
  }

  const btn_b = document.querySelector('button');
  btn_b.addEventListener('click', getInputValue);


function scoreCheck(){
  if (player.score > 21) {
    alert('Sorry, you lose! Click Bet to play again.');
    reset();
    document.getElementById('betting').disabled = false;
    document.getElementById('stay').disabled = true;
    document.getElementById('hit-me').disabled = true;
  }
}
  function moneyCheck(value){
    let currentAmount = document.getElementById('moneyValue');
    if (currentAmount === 0){
      alert(`Game over. No more money to spend.`);
      document.getElementById('betting').disabled = true;
      document.getElementById('stay').disabled = true;
      document.getElementById('hit-me').disabled = true;
      document.getElementById('reset_button').disabled = false;
    }
  }

//

//
function reset(event){
  player.score = 0;
  document.getElementById('playerScore').innerHTML = "Your score: " + 0;
  dealer.score = 0;
  document.getElementById('dealerScore').innerHTML = "Dealer's score: " + 0;
  player.hand = [];
  document.getElementById('playerHand').innerHTML = `Player Hand:`;
  dealer.hand = [];
  document.getElementById('dealerHand').innerHTML = `Dealer Hand:`;
  document.getElementById('betting').disabled = false;
}

function hardReset(){
  player.score = 0;
  document.getElementById('playerScore').innerHTML = "Your score: " + 0;
  dealer.score = 0;
  document.getElementById('dealerScore').innerHTML = "Dealer's score: " + 0;
  player.hand = [];
  document.getElementById('playerHand').innerHTML = `Player Hand:`;
  dealer.hand = [];
  document.getElementById('dealerHand').innerHTML = `Dealer Hand:`;
  player.money = 1000;
  let currentAmount = document.getElementById('moneyValue');
  currentAmount.innerHTML = "Current Amount: $" + player.money;

  document.getElementById('betting').disabled = false;
}
const btn_c = document.querySelector('#reset_button');
btn_c.addEventListener('click', hardReset);

////////////
//game play
///////////

//stand

// hit
// When a player hits, he adds a card to his hand. The player score then updates, and checks with winning Conditions
function stay(){
  if(dealer.score <17){
    dealerTurn();
  }
  scoreCheck();
  moneyCheck();
  winCondition();
}
const btn_d = document.querySelector('#stay');
btn_d.addEventListener('click', stay);



/////////////
//dealer turn
/////////////

function dealerTurn() {
    dealer.hand.push(deckOfCards.deck[0]);
    let dealerTurnScore = dealer.score;
    dealer.score = dealerTurnScore + dealer.hand[2].NumericValue
    document.getElementById('dealerScore').innerHTML = "Dealer's score: " + dealer.score;
    document.getElementById('dealerHand').innerHTML =  `Dealer Hand: ${dealer.hand[0].CardValue} of ${dealer.hand[0].cardSuit}, ${dealer.hand[1].CardValue} of ${dealer.hand[1].cardSuit},${dealer.hand[2].CardValue} of ${dealer.hand[2].cardSuit} `;

}
//////////////////
//hit me function
/////////////////

function hit_me(event){
  player.hand.push(deckOfCards.deck[0]);
  //console.log(player.hand)
  let hitAddScore = player.score;
  player.score = hitAddScore + player.hand[2].NumericValue;
  document.getElementById('playerScore').innerHTML = "Your score: " + player.score;
  document.getElementById('playerHand').innerHTML =  `Player Hand: ${player.hand[0].CardValue} of ${player.hand[0].cardSuit}, ${player.hand[1].CardValue} of ${player.hand[1].cardSuit},${player.hand[2].CardValue} of ${player.hand[2].cardSuit} `;
  scoreCheck();
  winCondition();
 }

 const btn_e = document.querySelector('#hit-me');
 btn_e.addEventListener('click', hit_me);





/////////////////////
//Winning Conditions
////////////////////
/*
//conditions for winning:
player score has to be less than 21 or
player score has to be greater than dealer score, while dealer score is also under 21

conditions for losing
dealer score, while under 21, is greater than player score
player score is over 21

*/

// reset button should be the only thing clickable
//need to grey out bet, stay and hitme!

function winCondition(value){
  let bettingValue = document.getElementById('button4Betting').value;
  let halfBettingValue = Math.round(bettingValue/2);
  let quarterBettingValue = Math.round(bettingValue/4);
  let currentAmount = document.getElementById('moneyValue');

  if (player.score === 21) {
    alert('BlackJack! You win!');
    currentAmount.innerHTML = "Current Amount: $" + (player.money + halfBettingValue);
    reset();
  }
  if (dealer.score === 21) {
    alert('Dealer BlackJack! You lose!');
    reset();
}
  if (dealer.score > 21){
    alert('You win! Dealer Bust! Click Bet to play again.');
    currentAmount.innerHTML = "Current Amount: $" + (player.money + halfBettingValue);
    reset();
  }
  if (player.score > dealer.score && dealer.score >= 17 && player.score < 21 ){
    alert('You win! Dealer had the lower hand. Click Bet to play again.');
    currentAmount.innerHTML = "Current Amount: $" + (player.money + halfBettingValue);
    reset();
  }
  if (player.score < dealer.score && dealer.score >=17 && dealer.score<21){
      alert('You lose. Dealer wins this round. Click Bet to play again.');
      reset();
    }

  if (player.score === dealer.score && dealer.score >= 17 && dealer.score <21){ //
    alert('Both player and dealer drew. You get some money back. Click Bet to play again.');
    currentAmount.innerHTML = "Current Amount: $" + quarterBettingValue;
    reset();
    //draw condition, player is returned 1/2 his money

  }
  if (player.money === 0){
    //grey out buttons except for reset button
    alert('Game Over! Hit the Reset button to start again.');
    //
  }
}
