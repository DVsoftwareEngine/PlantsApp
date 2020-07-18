import { writable } from "svelte/store";

const PlantsStore = writable([
  { plantName: "Cactus", nickname: "Broctus" },
  { plantName: "Flower", nickname: "FlYwer" },
]);

export default PlantsStore 

