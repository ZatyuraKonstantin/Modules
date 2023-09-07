import {Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "./game.js";

console.log('app worked')

const game = new Game();
game.start();
const gameSavingData = new GameSavingData();
gameSavingData.loadGame();
gameSavingData.saveGame();
console.log('app worked')