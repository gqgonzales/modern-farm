export const createSoybean = (type, height, output) => {
    const soybean = {
      type: "soybean",
      height: 20,
      output: 4,
    };
    return soybean;
  };

  export const soybeanSeed = createSoybean();

//   console.log(createSoybean());