export const harvestPlants = (usePlants) => {
  const newArray = [];

  for (const harvest of usePlants) {
    if (harvest.type === "Corn") {
      for (let j = 0; j < harvest.output / 2; j++) {
        newArray.push(harvest);
      }
    } else {
      for (let j = 0; j < harvest.output; j++) {
        newArray.push(harvest);
      }
    }
    return newArray;
  }
};
