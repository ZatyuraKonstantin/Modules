import "./domain"

export class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
  console.log("Игра загружена");
}

export function writeGameSaving() {
  console.log("Игра сохранена");
}