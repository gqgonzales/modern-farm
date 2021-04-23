export const createPotato = (type, height, output) => {
    const potato = {
      type: "potato",
      height: 32,
      output: 2,
    };
    return potato;
  };

  export const potatoSeed = createPotato();

//   console.log(createPotato());