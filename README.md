# Tic-Tac-Toe Game

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Process](#project-process)
  - [Planning](#planning)
  - [Development](#development)
- [Conclusion](#conclusion)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

Welcome to my Tic-Tac-Toe game! I wanted to create a simple, yet enjoyable game that everyone can have fun with. This project allowed me to practice my coding skills, problem-solving abilities, and project management. I hope you enjoy playing the game as much as I enjoyed making it!

## Features

Simple and clean user interface
Interactive gameplay for two players
Clear indication of which player's turn it is
Automatic detection of winning or tie conditions
Play again button to easily restart the game

## Installation

1. Clone or download this repository to your local machine.
2. Navigate to the project folder.
3. Open index.html in your preferred web browser.

## Usage

1. Two players take turns clicking on the grid cells to place their respective symbols (X and O).
2. The game automatically detects a win or a tie and displays a message with the result.
3. To play again, simply click the "Play Again" button below the game board.

## Project Process

### Planning

I began by brainstorming the game mechanics, user interface, and overall structure of the Tic-Tac-Toe game. I wanted to create an enjoyable and user-friendly experience, so I focused on a simple, clean design. After sketching out a rough plan for the layout and game flow, I moved on to the development phase.

### Development

During the development phase, I used HTML, CSS, and JavaScript to bring the game to life. I started by building the game board with an HTML grid and styled it with CSS. Next, I created the JavaScript logic to handle player interactions, turns, and win conditions.

Throughout the development process, I faced a few challenges and needed to apply my problem-solving skills to overcome them. I learned from my mistakes and improved my code by iterating and refining my solutions.

## Problem Solving

One problem I ran into was getting the X's and O's to sit nicely in the middle of their table cells. At first, they were all over the place, and let's be honest, it wasn't the prettiest sight. I experimented with different CSS properties and eventually discovered that using,

```
 display: flex;
 justify-content: center;
 align-items: center;
```

did the trick. This solution not only centered the X and O's but also made the game board look much better.

Another issue I encountered was with the winner detection function. It wasn't always getting the winner or a tie right, which is kind of a big deal in a game like this! I had to roll up my sleeves, dive into the logic, and make a few tweaks here and there. In the end, I rewrote the checkTie() function to loop through the board, searching for empty cells. If no empty cells were found and no winner was declared, it'd call it a tie.

I also noticed some pesky error messages that popped up when trying to play. I reviewed the code and found a mistake in the countAdjacent() function. The original code was causing the function to access undefined array indices. TAfter inspecting the code, I found the culprit in the countAdjacent() function. The sneaky bug was making the function access some undefined array indices. So, I added a check to keep the column and row indices within the board's bounds, and problem solved!

This whole adventure taught me that breaking down big problems into bite-sized pieces and thoroughly testing each part is the way to go. By carefully analyzing the issues and refining my solutions, I managed to create a smooth, fully functional game.

## Conclusion

Creating this Tic-Tac-Toe game was a blast and a great learning adventure!. I learned a lot about web development and honed my problem-solving skills. I'm proud of the final result, and I hope you have fun playing the game!
