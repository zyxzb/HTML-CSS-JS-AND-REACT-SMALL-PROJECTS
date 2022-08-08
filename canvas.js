const canvas = document.querySelector('.canvas');
const increaseBtn = document.querySelector('.canvas__button-increase');
const decreaseBtn = document.querySelector('.canvas__button-decrease');
const setColor = document.querySelector('.canvas__color');
const sizeEl = document.querySelector('.canvas__line-size');
const clearBtn = document.querySelector('.button__clear');

const ctx = canvas.getContext('2d');

let size = 2;
let color = 'black';
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown", function (e) {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener("mouseup", function () {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener("mousemove", function (e) {
    if (isPressed) {
        x2 = e.offsetX;
        y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2
        y = y2
    }

})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();

}

function updateSizeOnScreen() {
    sizeEl.textContent = size;
}

setColor.addEventListener('change', function (e) {
    color = e.target.value;
})

increaseBtn.addEventListener('click', function () {

    size += 1
    if (size >= 20) {
        size = 20;
    }

    updateSizeOnScreen();
})

decreaseBtn.addEventListener('click', function () {

    size -= 1
    if (size <= 1) {
        size = 1;
    }
    updateSizeOnScreen();
})

clearBtn.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})