/* 

The one exception is corn. 
The createCorn function should return an array with two identical objects in it. 
Each with the proper keys and values.

*/

export const createCorn = () => {
  const corn = {
    type: "corn",
    height: 180,
    output: 6,
  };
  return [corn, corn];
};

export const cornSeed = createCorn();

//   console.log(createCorn());