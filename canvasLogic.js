const ctx = canvas.getContext('2d');
const sources = [{
    name: "cow",
    level: [1, 2, 3, 4, 5, 6],
    src: "./images/cow128x128.png",
    x: canvas.width / 4,
    y: canvas.height / 2,
    speed: 4
  },
  {
    name: "plant",
    level: [1, 2, 3, 4, 5, 6],
    src: "./images/plant128x128.png",
    x: Math.floor(Math.random() * (canvas.width / 2 - 130)) + canvas.width / 2,
    y: Math.floor(Math.random() * (canvas.height - 130)),
  },
  {
    name: "spaceship",
    level: [2, 3, 4, 5, 6],
    src: "./images/spaceship128x128.png",
    dx: 3,
    dy: -3,
    x: canvas.width - 100,
    y: canvas.height - 100,
    speed: 2
  },
  {
    name: "pinkmonster",
    level: [3, 4, 5, 6],
    src: "./images/pinkmonster128x128.png",
    dx: 3,
    dy: -3,
    x: 0,
    y: 0,
    speed: 3
  }
];

function loadImages(sources) {
  let currentLevel = 1;
  for (let src of sources) {
    if (src.level.includes(currentLevel)) {
      console.log("includes yay");
      const img = new Image();
      img.src = src.src;
      img.onload = () => {
        console.log("onload yay");
        ctx.drawImage(img, src.x, src.y)
      };
    }
  }
}

loadImages(sources);