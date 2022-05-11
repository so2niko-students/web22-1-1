const model = () => {
    const random = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
    const rNums = [];
    const winNum = random(0, 2);

    do{
        const r = random(1, 10);
        if(!rNums.includes(r)){
            rNums.push(r);
        }
    }while(rNums.length < 3);

    return {
        winner : rNums[winNum],
        nums : rNums
    }
}

const view = (nums, onClick) => {
    const btns = document.querySelectorAll('.btn');
    
    btns.forEach((btn, i) => {
        btn.innerText = nums[i];
        btn.addEventListener('click', onClick);
    });
}

const controller = () => {
    const txt = document.querySelector('.txt');
    const { winner, nums } = model();

    const onClick = (ev) => {
        const user = ev.target.innerText;
        if(user == winner){
            txt.innerText = 'Вы выиграли';
        }else{
            txt.innerText = 'Вы проиграли';
        }
    }
    view(nums, onClick);
}

controller();