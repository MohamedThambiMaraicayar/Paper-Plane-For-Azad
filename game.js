const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const plane = {
    x: 50,
    y: 200,
    width: 50,
    height: 25,
    speed: 2,
    dx: 0,
    dy: 0
};

function drawPlane() {
    ctx.fillStyle = 'red';
    ctx.fillRect(plane.x, plane.y, plane.width, plane.height);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clearCanvas();
    drawPlane();
    
    plane.x += plane.dx;
    plane.y += plane.dy;
    
    requestAnimationFrame(update);
}

function moveUp() {
    plane.dy = -plane.speed;
}

function moveDown() {
    plane.dy = plane.speed;
}

function stopMovement() {
    plane.dy = 0;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
});

document.addEventListener('keyup', stopMovement);

update();
