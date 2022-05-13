//MVC
//M - model(data), V - view(render data), C - Controller (mediator)

const modelGame = (people) => {
    const rand = (from, to) => Math.floor((Math.random() * (to - from + 1)) + from);
    const randArr = arr => arr[rand(0, arr.length - 1)];
    
    // const people = ['Nick', 'Alex', 'Egor', 'Artem', 'Eliz'];
    const races = ['Human', 'Elf', 'Dark Elf', 'Dwarf', 'Orc', 'Undead'];
    const roles = ['DD', 'Heal', 'Tank', 'RDD'];
    const classes = {
        'DD' : ['Paladin', 'Barbarian', 'Assassin', 'Rogue', 'Warrior'],
        'Heal' : ['Paladin', 'Priest'],
        'Tank' : ['Paladin', 'Barbarian', 'Warrior'],
        'RDD' : ['Mage', 'Priest', 'Necromanser', 'Hunter', 'Assassin', 'Rogue']
    }
    
    const users = people.map(name => {
        const role = randArr(roles);
        return  {
            name, role,
            race    : randArr(races),
            classUser   : randArr(classes[role])
        }
    });

    return users;
}

const viewGame = users => {4
    const domUsers = document.querySelector('.users');

    const htmlUsers = users.map(({ name, race, role, classUser }) => {
        return `<div>
            <img src="img/${ classUser }.jpg" class="img_class">
            <h2>${ name }</h3>
            <h4>${ race } ${ role } ${ classUser }</h4>
            <img src="img/${ role.toLowerCase() }.png" class="img_role">
        </div>`;
    }).join('');

    domUsers.innerHTML = htmlUsers;
}

const controllerGame = (people) => {
    const users = modelGame(people);
    viewGame(users);
}

export default controllerGame;