const hslEl = document.getElementById('hsl');
const rgbEl = document.getElementById('rgb');
const hexEl = document.getElementById('hex');
const btnEl = document.getElementById('btn');

hslEl.addEventListener('click', copyToClipboard);
rgbEl.addEventListener('click', copyToClipboard);
hexEl.addEventListener('click', copyToClipboard);
btnEl.addEventListener('click', newColor);

function HSLtoRGB(h, s, l) {
  let r, g, b;
  
  const rd = (a) => {
    return Math.floor(Math.max(Math.min(a*256, 255), 0)); 
  };
  
  const hueToRGB = (m, n, o) => {
    if (o < 0) o += 1;
    if (o > 1) o -= 1;
    if (o < 1/6) return m + (n - m) * 6 * o;
    if (o < 1/2) return n;
    if (o < 2/3) return m + (n - m) * (2/3 - o) * 6;
    return m;
  }
  
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  
  r = hueToRGB(p, q, h + 1/3);
  g = hueToRGB(p, q, h);
  b = hueToRGB(p, q, h - 1/3);

  return [rd(r), rd(g), rd(b)]
}

function RGBtoHex(r, g, b) {
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

function copyToClipboard() {
  document.execCommand("copy");
}

function newColor() {
  const hBase = Math.random();
  const newH = Math.floor(hBase * 360);
  const newL = Math.floor(Math.random() * 16) + 75;
  
  const [ r, g, b ] = HSLtoRGB(hBase, 1, newL*.01);
  const hex = RGBtoHex(r,g,b);

  insertColorToStyles(newH, newL);

  hslEl.innerText = `hsl(${newH}, 100%, ${newL}%)`;
  rgbEl.innerText = `rgb(${r}, ${g}, ${b})`;
  hexEl.innerText = `${ hex }`; 
}

function insertColorToStyles(newH, newL){
    const colors = {
        bgColor  : `hsl(${newH}, 100%, ${newL}%)`,
        txtColor : `hsl(${newH}, 100%, 5%)`,
        btnColor : `hsl(${newH}, 100%, 98%)`,
        btnFocus : `hsl(${newH}, 100%, 95%)`
    };  

    //? Действия:
    // 1. Object.entries(colors) - получаем массив [['bgColor','hsl(250, 100%, 80%)'],['txtColor', 'hsl(250, 100%, 5%)'],[],]
    // 2. По очереди вызываем функцию и передаем ей элемент массива
    // 3. Деструктурирующее присваивание в k и v переменные
    // 4. Находим <html> элемент через document.documentElement
    // 5. Заносим в стили значение '--bgColor' будет равняться 'hsl(250, 100%, 80%)'
    Object.entries(colors).forEach(([k, v]) => {
      document.documentElement.style.setProperty(`--${k}`, `${v}`);
    });
}

newColor();
