// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field.
// Do not export the array.
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn";
import { createPotato } from "./seeds/potato";
import { createSoybean } from "./seeds/soybean";
import { createSunflower } from "./seeds/sunflower";
import { createWheat } from "./seeds/wheat";

const thisHarvest = [];

export const addPlant = (createSoybean) => {
  thisHarvest.push;
};

export const usePlants = () => {
  return thisHarvest;
};

console.log(thisHarvest);
