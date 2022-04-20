// const r0_10 = Math.floor(Math.random() * (10 - 0) + 0); //[0,10)
// const r0_20 = Math.floor(Math.random() * 20 + 0); //[0,20)
// const r0_100 = Math.floor(Math.random() * 100 + 0); //[0,100)
// const r1_10 = Math.floor(Math.random() * (10 - 1) + 1); //[1,10)
// const r5_9 = Math.floor(Math.random() * (9 - 5) + 5); //[5,9)
// const r15_30 = Math.floor(Math.random() * (30 - 15 + 1) + 15); //[15,30]

//!---------------------------------------------------------------------------
//!---------------------------------------------------------------------------
const random = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);

const MY_EL = {
    h1      : document.querySelector('.answer'),
    inpFrom : document.querySelector('.inp-from'),
    inpTo   : document.querySelector('.inp-to'),
    btnGen  : document.querySelector('.btn-generate')
};


MY_EL.btnGen.addEventListener('click', () => {
    const from = MY_EL.inpFrom.value * 1;
    const to = MY_EL.inpTo.value * 1;

    const rnd = random(from, to);

    MY_EL.h1.innerText = rnd;
});
 