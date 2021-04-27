export const catalog = (collectHarvest) => {
  let food = "";
  for (const crop of collectHarvest) {
    food += `<div id="food">${crop.type}</div>`;
  }
  return food;
};