const rand = (from, to) => Math.floor((Math.random() * (to - from + 1)) + from);
const randArr = arr => arr[rand(0, arr.length - 1)];

const people = ['Nick', 'Alex', 'Egor', 'Artem', 'Eliz'];
const races = ['Human', 'Elf', 'Dark Elf', 'Dwarf', 'Orc', 'Undead'];
const roles = ['DD', 'Heal', 'Tank', 'RDD'];
const classes = {
    'DD' : ['Paladin', 'Monk', 'Druid', 'Warrior'],
    'Heal' : ['Paladin', 'Priest', 'Druid'],
    'Tank' : ['Paladin', 'Druid', 'Warrior'],
    'RDD' : ['Mage', 'Priest', 'Druid', 'Warlock']
}

const users = people.map(name => {
    const role = randArr(roles);
    return  {
        name    : name,
        race    : randArr(races),
        role,
        class   : randArr(classes[role])
    }
});

console.table(users);