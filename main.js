//! Массивы
const nums = [1, 3, 5, 7];
const nums0 = [];
const nums1 = [1, 'hello', true, null, undefined, { name: 'array' }];
const nums2 = [1, 3, [ 1, 3, 5], 5, 7, [ 'hello', [ 12, 454, 56, 6 ]]];
const nums3 = Array(1, 2, 6);
const nums4 = Array(33);
const nums5 = Array('hello');

// push, pop, unshift, shift

nums[11] = 11111111;
nums['color'] = 'purple';


// console.log(nums);

//? ------------------------------------------------------


const rand = (from, to) => Math.floor((Math.random() * (to - from + 1)) + from);
const randArr = arr => arr[rand(0, arr.length - 1)];

const people = ['Nick', 'Alex', 'Egor', 'Artem', 'Eliz'];
const roles = ['DD', 'Heal', 'Tank', 'RDD'];
const classes = ['Paladin', 'Mage', 'Monk', 'Priest', 'Druid', 'Warrior', 'Warlock'];
const races = ['Human', 'Elf', 'Dark Elf', 'Dwarf', 'Orc', 'Undead'];

const users = [];

for(let i = 0; i < people.length; i += 1){
    const user = {
        name    : people[i],
        role    : randArr(roles),
        class   : randArr(classes),
        race    : randArr(races)
    }
    // const user = {
    //     name    : people[i],
    //     role    : roles[rand(0, roles.length - 1)],
    //     class   : classes[rand(0, classes.length - 1)],
    //     race    : races[rand(0, races.length - 1)],
    // }
    users.push(user);
}

console.table(users);