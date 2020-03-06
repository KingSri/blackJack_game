# blackJack_game
Code project 0
![WireFrame](https://github.com/KingSri/blackJack_game/blob/master/images/Photos%20-%201%20of%202.png)
![Rules](https://github.com/KingSri/blackJack_game/blob/master/images/Photos%20-%202%20of%202.png)

#(Special thanks to Ajay Kumar, Seanny Drakon Phoenix and the teachers for helping me out.)

#User Story:
*As a new software engineering immersive student, I wanted to take the concepts that I had learned over the past three weeks and apply them into a project so that I could see what I could build and where I could make improvements.

# How to access the game
Users can download the game via zip file, or they can get it from the github repo.

# Purpose and Thought Process:

The purpose of this project is to design a blackjack game. Concepts used for the game are HTML, CSS, and Javascript.
Javascript holds the bulk of the backend of the game. HTML displaeeys how the game looks on a webpage, and CSS helps it look visually appealing.

My thought process for this game was to first outline how I wanted the game to go. I first wrote out how a game of blackjack would go. The player would first bet money, then be dealt cards. He could then either stand or hit, stand being taking no action, and hit being adding a card to his hand. Based on this action, the dealer would then go through a similar series of actions before checking the sum of the cards in hands via winning conditions.

I first started on betting button. I switched from this to an object with functions that  would build, shuffle, and deal a deck. I then finished the bet button, before working on stay, and hit me buttons and functions. Finally, I worked on winning conditions.


# BlackJack Rules:

The rules of BlackJack are relatively simple. Below are my modified rules to play this game.

1. Rules:
  1.The goal of the game is to hit 21 with the cards that you have in your hand. Don't go over, but be careful if you want to add more cards.
  2. the user will click bet and the game will begin. Player will be dealt cards and dealer will also be dealt cards.
2. Variables:
  1. Money will be stored in the Current Amount Variable, while score will reflect the sum of the held cards in hand.
3. Winning Conditions:
  1. If the player gets 21, they automatically win
  2. If the player has a greater hand than the dealer while still staying under 21, they win
  3. If the dealer goes over 21, the player wins.
  4. Winning will give the player half of their inputted bet back.
4. Losing Conditions:
  1.If the player goes over 21, they automatically lose the round
  2.If the dealer has a hand that is in between 17 and 21, and it is higher than the player's hand, the player loses the round
  3.If the player's money drops to zero, they lose the game. They have no option but to hit the reset button.
5. Draw Condition
  1. If the player and dealer get the same value at the end of the round, they both draw. Player will get a quarter of what they bet.
6. Player Actions:
  1. User hits bet
    1.Bet starts the round, dealing two random cards to the player and the dealer hands. The sum of the cards will reflect in player score.
    2. Bet takes in an integer input and updates the current amount. This reflects how much money the player has left. Player starts with $1000, and if they hit 0 or a negative number, the game is over.    
  2. User can hit stay
     1. Stay will not add any changes to user hand, and will instead play dealer's turn
     2. Dealer will keep drawing cards till the sum of his cards is between 17 to 21.
     3. After dealer draws cards, the win condition function will activate and player score will be compared with the dealer score. Whoever matches the conditions (ie. being under 21 but having the higher sum of cards) will win that round.
  3.User can hit Hit me
    1. hit me will add a card to the player's hand, while also updating their score. It will immediately check that number against the winning conditions
  4.User hits reset
    1. reset will hard reset the entire board, making all values return to either empty or zero.
    2. This condition is only to be used in the event of losing all your money. Other buttons automatically reset for the next round.

# Unsolved issues:
Some of the issues I ran into while programming that still have to be resolved include having the hitme and stay functions update the value on the HTML before running the victory/losing check functions for loss or win. In a future iteration of this project, I want to clear the input on the  Additionally,
due to a lack of time, the CSS of the page looks very unfinished. Given more time, this will be rectified. Primarily, instead of printing out the value of the cards, I would like for it to be linked to card images so that the output would be cards as opposed to objects from arrays.
