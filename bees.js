const model = () => {
    const random = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
    const rNums = [random(1, 10), random(1, 10)];

    return rNums;
}

const view = (nums, onClick) => {
    const task = document.querySelector('.task');
    const inp = document.querySelector('.inp');
    
    task.innerText = `${ nums[0] } - ${ nums[1] }`;

    inp.addEventListener('input', onClick);
    
}

const controller = () => {
    const nums = model();
    const solve = nums[0] - nums[1];

    const onClick = (ev) => {
        const answer = ev.target.value;
        if(answer == solve){
            ev.target.classList.add('right');
            ev.target.classList.remove('wrong');
        }else{
            ev.target.classList.add('wrong');
            ev.target.classList.remove('right');
        }
    }
    
    view(nums, onClick);
}

controller();