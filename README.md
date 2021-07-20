# Number Guesser

This is a training project to practice JavaScript, Markdown, Git & Github

## Table of contents

+ [General Info](#General-Info)
+ [Technologies](#Technologies)
+ [Steps](#Steps)
+ [Sources](#Sources)

### General Info

#### Overview

This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

#### Project Goals

In this project, you’ll write JavaScript functions to power a small guessing game. Your code will run in the browser instead of just the terminal, but you have an output section to help you test your functions and show you if you have syntax errors.

### Technologies

Basic JavaScript knowledge

### Steps

1. Create a generateTarget() function. This function will be called at the start of each new round in order to generate the new secret target number. This function should return a random integer between 0 and 9.
2. Create a compareGuesses() function. This function will be called each round to determine which guess is closest to the target number.

    This function:

    + Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
    + Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
    + Return true if the human player wins, and false if the computer player wins.

3. Create an updateScore() function. This function will be used to correctly increase the winner’s score after each round.

    This function:

    + Has a single parameter. This parameter will be a string value representing the winner.
    + Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
    + Does not need to return any value.

4. Create an advanceRound() function. This function will be used to update the round number after each round. advanceRound() should increase the value of currentRoundNumber by 1. After completing advanceRound(), your Number Guesser game should be fully operational. You should be able to make guesses, see your or the computer score increase correctly, move to the next round, and see the correct round displayed.
5. Test that your code is working properly by invoking your newly written functions within script.js with sample inputs. You can delete this code once you’re convinced that everything is working as it should.
6. Great work! If you’d like to extend your project on your own, you could consider the following:

    + You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.
    + Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. It’s not possible to set a number outside this range with the + and = buttons, but users can do so by typing directly in the input field.

### Sources

This is a project from my online course codecademy.com
