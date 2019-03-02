import Character from './Domain.js';

class Game {
  start() {
    this.error = 'antilint error';
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
