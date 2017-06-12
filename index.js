#!/usr/bin/env nod
'use strict';
const prompt = require('prompt');

console.log('¡Bienvenidos to Tick Taco Toe!');

const board = [[null, null, null], [null, null, null], [null, null, null]];

prompt.start();
const makeAMove = (place, player) => {
  if(place === 's') {
    board[1][1] = player;
  } else if(place === 'w') {
    board[0][1] = player;
  } else if(place === 'a') {
    board[1][0] = player;
  } else if(place === 'd') {
    board[1][2] = player;
  } else if(place === 'x') {
    board[2][1] = player;
  } else if(place === 'q') {
    board[0][0] = player;
  } else if(place === 'e') {
    board[0][2] = player;
  } else if(place === 'z') {
    board[2][0] = player;
  } else if(place === 'c') {
    board[2][2] = player;
  }
}
const isWinner = (player) => {
  const piece = player === 1 ? 'X' : 'O';
  let winner = false;
  if(board[0].filter(p => p=== piece) === 3)
    winner = true;
  if(board[1].filter(p => p=== piece) === 3)
    winner = true;
  if(board[2].filter(p => p=== piece) === 3)
    winner = true;

  if(winner) {
    console.log('¡Felicidadez! ¡Player ' + player);
  }
  return winner;
};

const showBoard = () => {
  console.log('Board');
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

const play1 = () => {
  showBoard();
  prompt.get('Player 1 turn', (err, result) => {
    makeAMove(result['Player 1 turn'], 'X');
    if(isWinner(1)) return;
    play2();
  });
}

const play2 = () => {
  showBoard();
  prompt.get('Player 2 turn', (err, result) => {
    makeAMove(result['Player 2 turn'], 'O');
    if(isWinner(2)) return;
    play1();
  });
}

play1();
