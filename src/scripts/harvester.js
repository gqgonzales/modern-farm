/* 
In this module, define and export a harvestPlants function.
The harvestPlants function must accept the plants array as input.
The function will return an array of seed objects.
Iterate the array of growing plants. On each plant, get the value of the output property.
Add that many of the plant objects to the array that the function returns.
Again, the exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns.
*/


export const harvestPlants = (plantsArray) => {
  const newArray = [];

  for (const harvest of plantsArray) {
    if (harvest.type === "Corn") {
      for (let j = 0; j < harvest.output / 2; j++) {
        newArray.push(harvest);
      }
    } else {
      for (let j = 0; j < harvest.output; j++) {
        newArray.push(harvest);
      }
    }
  }
  return newArray;
};
