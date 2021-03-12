import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const gerneratePalette = (starterPalette) => {
  let newPalette = {
    ...starterPalette,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  //   结果：colors:{
  //       50:[],
  //       100:[]
  //       ...
  //   }

  for (let color of starterPalette.colors) {
    let scale = generateScale(color.color, 10).reverse(); //from light to dark
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css('rgba'),
      });
    }
  }
  return newPalette;
};

const getRange = (hexColor) => {
  const endColor = '#fff';
  //gernerate an array
  return [chroma(hexColor).darken(1.4).hex(), hexColor, endColor];
};

const generateScale = (hexColor, numberOfColors) => {
  //类似 chroma.scale(['yellow', 'red', 'black']), create a color scale
  //.colors(n) 返回中间的n个颜色
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
};

export { gerneratePalette };
