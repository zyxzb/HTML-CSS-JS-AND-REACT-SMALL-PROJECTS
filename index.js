const loveMe = document.querySelector('.double-click__heart-click');
const times = document.querySelector('.double-click__times');

let clickTime = 0;
let timesClicked = 0;

// 'dbclick' or custom click time (pause between clicks)

loveMe.addEventListener('click', (event) => {

    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 500) {
            createHeart(event);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }

    }
})

const createHeart = (event) => {
    const heart = document.createElement('i');
    heart.classList.add('fa-solid');
    heart.classList.add('fa-heart');

    const x = event.clientX;
    const y = event.clientY;

    const leftOffset = event.target.offsetLeft;
    const topOffset = event.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 600)


}