export const catalog = (collectHarvest) => {
  let food = "";
  for (const crop of collectHarvest) {
    food += `<div class="harvest">${crop.type}</div>`;
  }
  return food;
};

/* 

export const catalog = (harvestedFood) => {
    let harvest = ''

    for (const food of harvestedFood) {
        harvest += `<div class="harvest">${food.type}</div>`
    }
    return harvest
}

*/
