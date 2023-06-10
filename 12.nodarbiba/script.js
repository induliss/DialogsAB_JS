const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const paused = document.getElementById("myDIV")

let score = 0;

const brickRowCount = 9;
const brickColumnCount = 5;

// Create ball props
const square = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4
};

// Create paddle props
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0
};

// Create brick props
const brickInfo = {
  w: 70,
  h: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true
};

// Create bricks
const bricks = [];
for (let i = 0; i < brickRowCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickColumnCount; j++) {
    const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX;
    const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY;
    bricks[i][j] = { x, y, ...brickInfo };
  }
}

// Draw ball on canvas
function drawSquare() {
  ctx.beginPath();
  ctx.arc(square.x, square.y, square.size, 0, Math.PI * 2);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

// Draw paddle on canvas
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h);
  ctx.fillStyle = '#0095dd';
  ctx.fill();
  ctx.closePath();
}

// Draw score oon canvas
function drawScore() {
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Draw bricks on canvas
function drawBricks() {
  bricks.forEach(column => {
    column.forEach(brick => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? '#0095dd' : 'transparent';
      ctx.fill();
      ctx.closePath();
    });
  });
}

// Move paddle on canvas
function movePaddle() {
  paddle.x += paddle.dx;

  // Wall detection
  if (paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w;
  }

  if (paddle.x < 0) {
    paddle.x = 0;
  }
}

// Move ball on canvas
function moveSquare() {
  square.x += square.dx;
  square.y += square.dy;

  // Wall collision (right/left)
  if (square.x + square.size > canvas.width || square.x - square.size < 0) {
    square.dx *= -1; // ball.dx = ball.dx * -1
  }

  // Wall collision (top/bottom)
  if (square.y + square.size > canvas.height || square.y - square.size < 0) {
    square.dy *= -1;
  }

  // console.log(ball.x, ball.y);

  // Paddle collision
  if (
    square.x - square.size > paddle.x &&
    square.x + square.size < paddle.x + paddle.w &&
    square.y + square.size > paddle.y
  ) {
    square.dy = -square.speed;
  }

  // Brick collision
  bricks.forEach(column => {
    column.forEach(brick => {
      if (brick.visible) {
        if (
          square.x - square.size > brick.x && // left brick side check
          square.x + square.size < brick.x + brick.w && // right brick side check
          square.y + square.size > brick.y && // top brick side check
          square.y - square.size < brick.y + brick.h // bottom brick side check
        ) {
          square.dy *= -1;
          brick.visible = false;

          increaseScore();
        }
      }
    });
  });

  // Hit bottom wall - Lose
  /*if (ball.y + ball.size > canvas.height) {
    showAllBricks();
    score = 0;
  }*/

  }

// Increase score
function increaseScore() {
  score++;

  if (score % (brickRowCount * brickRowCount) === 0) {
    showAllBricks();
  }
}

// Make all bricks appear
function showAllBricks() {
  bricks.forEach(column => {
    column.forEach(brick => (brick.visible = true));
  });
}

// Draw everything
function draw() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSquare();
  drawPaddle();
  drawScore();
  drawBricks();
}

// Update canvas drawing and animation
function update() {
  movePaddle();
  moveSquare();

  // Draw everything
  draw();

  requestAnimationFrame(update);
}

update();

// Keydown event
function keyDown(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    paddle.dx = paddle.speed;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    paddle.dx = -paddle.speed;
  }
}

// Keyup event
function keyUp(e) {
  if (
    e.key === 'Right' ||
    e.key === 'ArrowRight' ||
    e.key === 'Left' ||
    e.key === 'ArrowLeft'
  ) {
    paddle.dx = 0;
  }
}

// Keyboard event handlers
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Rules and close event handlers
rulesBtn.addEventListener('click', () => rules.classList.add('show'));
closeBtn.addEventListener('click', () => rules.classList.remove('show'));

