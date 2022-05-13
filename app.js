import controllerGame from "./game.js";

const controllerUI = () => {
    //функция обработчик клика
    document.querySelector('.btn_users').addEventListener('click', () => {
        const d = document.querySelector('.ta_users').value;
        const people = d.split(',');
        controllerGame(people);
        document.querySelector('.ui').classList.add('hide');
    });
}

const people = ['Nick', 'Alex', 'Egor', 'Artem', 'Eliz'];


controllerUI();