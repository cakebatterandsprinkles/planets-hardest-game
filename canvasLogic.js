const ctx = canvas.getContext('2d');
const sources = [{
    name: "cow",
    level: [1, 2, 3, 4, 5, 6],
    src: "./images/cow128x128.png",
    width: 107,
    height: 68,
    x: canvas.width / 4,
    y: canvas.height / 2,
    dx: 0,
    dy: 0,
    speed: 3
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
      if (!src.img) {
        const img = new Image();
        img.src = src.src;
        src.img = img;
      }
      ctx.drawImage(src.img, src.x, src.y);
    }
    if (src.name === 'cow') {
      moveCow(src);
    }
  }
}

function moveCow(cow) {
  cow.x += cow.dx;
  cow.y += cow.dy;
  if (cow.x + cow.width > canvas.width) {
    cow.x = canvas.width - cow.width;
  }
  if (cow.x < 0) {
    cow.x = 0
  }
  if (cow.y + cow.height > canvas.height) {
    cow.y = canvas.height - cow.height;
  }
  if (cow.y < 0) {
    cow.y = 0
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  loadImages(sources);
}

let levelEnd = false;

function update() {
  moveCow(sources[0]);
  draw();

  if (!levelEnd) {
    requestAnimationFrame(update);
  }
}

loadImages(sources);
update();

document.addEventListener('keydown', e => {
  console.log('keydown');
  if (e.key === "ArrowRight" || e.key === "Right") {
    sources[0].dx = sources[0].speed;
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    sources[0].dx = -sources[0].speed;
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    sources[0].dy = -sources[0].speed;
  } else if (e.key === "ArrowDown" || e.key === "Down") {
    sources[0].dy = sources[0].speed;
  }
})

document.addEventListener('keyup', e => {
  console.log('keyup', e);
  if (e.key === "ArrowRight" || e.key === "Right" || e.key === "ArrowLeft" || e.key === "Left") {
    sources[0].dx = 0;
  }
  if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down") {
    sources[0].dy = 0;
  }
})