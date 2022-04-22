const random = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);

const container = document.querySelector('.container');

//! Создание элементов DOM

//? 1. Создание через string --> innerHTML
// const circle1 = '<div class="circle"></div>';
// container.innerHTML = circle1;

//? 2. Методы для создания элементов (createElement())
// const rhomb = document.createElement('div');
// rhomb.classList.add('rhombus');
// container.appendChild(rhomb);

let circles = '';
const figures = ['square', 'rhombus', 'triangle', 'circle'];
for(let i = 0; i < 100; i += 1){
    const left = `left : ${ random(0, 100) }vw`;
    const top = `top : ${ random(0, 100) }vh`;
    const figureClass = figures[random(0, figures.length - 1)];
    const color = figureClass == 'triangle' ? 'border-bottom' : 'background';
    const r = random(0, 255);
    const g = random(0, 255);
    const b = random(0, 255);
    const bgColor = `${ color }-color: rgb(${ r }, ${ g }, ${ b })`;
    circles += `<div class="${ figureClass }" style="${ left }; ${ top }; ${ bgColor }"></div>`;
}

container.innerHTML = circles;