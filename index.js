#!/usr/bin/env nod
'use strict';
const prompt = require('prompt');

console.log('Welcome to Ticket Taco Toe!');

const board = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];

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

const rowWinner = (player) => (
  board.filter(r => r[0] === player).length === 3 || board.filter(r => r[1] === player).length === 3
  || board.filter(r => r[2] === player).length === 3
);

const colWinner = (player) => (
  board[0].filter(p => p == player).length === 3 || board[1].filter(p => p == player).length === 3
  || board[2].filter(p => p == player).length === 3
);

const majDiagWinner = (player) => (
  board[0][0] === player && board[1][1] === player && board[2][2] === player
);

const minDiagWinner = (player) => (
  board[0][2] === player && board[1][1] === player && board[2][0] === player
);

const isWinner = (player) => {
  const piece = player === 1 ? '🎟' : '🌮';

  if(rowWinner(piece) || colWinner(piece) || majDiagWinner(piece) || minDiagWinner(piece)) {
    printBoard();
    console.log();
    console.log(`¡Felicidadez! 🎉 ¡Player ${player} won! ${piece} ${piece} ${piece}`);
    return true;
  }
  return false;
};

const printBoard = () => {
  console.log('Board');
  board.forEach(b => { console.log(...b); });
}

const play1 = () => {
  printBoard();
  prompt.get('Player 1 turn', (err, result) => {
    makeAMove(result['Player 1 turn'], '🎟');
    if(isWinner(1)) return;
    play2();
  });
}

const play2 = () => {
  printBoard();
  prompt.get('Player 2 turn', (err, result) => {
    makeAMove(result['Player 2 turn'], '🌮');
    if(isWinner(2)) return;
    play1();
  });
}

play1();
