import { Game } from "./Game.js";

let game : Game;

function onLoad() : void {
  const canvas = document.querySelector('canvas')!;
  const ctx = canvas.getContext('2d')!;
  game = new Game(ctx);
  window.requestAnimationFrame(tick);
}

onLoad();

(window as any).onLoad = onLoad;

function tick(timestamp : number) {
  game.tick(timestamp);
}