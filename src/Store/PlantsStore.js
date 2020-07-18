import { writable } from "svelte/store";

const PlantsStore = writable( [
  {"plantName": "Cactus", "img": "../pic" },
  {"plantName": "Flower", "img": "../pic" }
] );

export default PlantsStore 

