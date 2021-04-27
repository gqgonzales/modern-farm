// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field.
// Do not export the array.
// import { createAsparagus } from "./seeds/asparagus.js";
// import { asparagusSeed } from "./seeds/asparagus.js";

// import { asparagusSeed } from "./seeds/asparagus.js";
const thisHarvest = [];

// addPlant adds the seed to the field.
//You must specify which seed you are planting inside the push() method.
export const addPlant = (seedObject) => {
  if (Array.isArray(seedObject)) {
    for (const value of seedObject) {
      thisHarvest.push(value);
    }
  } else {
    thisHarvest.push(seedObject);
  }
};

// Returns a copy of the array of plants.
export const usePlants = () => {
  return thisHarvest;
};
