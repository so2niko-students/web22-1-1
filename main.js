var a = 3;

let b = 3;
const c = 4;

const d = {};

d.name = 'lalal';

const e = [1, 3, 'haha'];

e.push('another data');

//--------------------------
//! Conditions

if(true){
    //
}else{
    //
}

if(true){
    //
}

true ? console.log('yes') : console.log('no');

switch(123){
    case 100 : {
        //
        break;
    }
    case 37 : {
        //
        break;
    }
    case 123: {
        //
        break;
    }
    default:{
        //Действие по умолчанию.
    }
}

// const input = 1 * prompt('hello');
// switch(input){
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
//     case 2 : {
//         console.log('Лютий, Февраль, February');
//         break;
//     }
//     case 3 : {
//         console.log('Березень, Март, March');
//         break;
//     }
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
//     case 1 : {
//         console.log('Грудень, Январь, January');
//         break;
//     }
// }

//! Loops

//Циклы с предусловием
let iterator = 0;
while(iterator < 10){
    //тело цикла
    console.log(iterator)
    iterator++;
}

for(let i = 0; i < 10; i++){
    //тело цикла
    console.log(i);
}

//Циклы с послеусловием
do{
    // тело цикла
    console.log('do-while');
}while(false);

//! Functions
const actors = [];
const movies = [];

hollywood('Johnny Depp');
hollywood('Jimm Kerry');
hollywood('Robert Downey Jr.');
hollywood('Angelina Joley');

// Декларативный
function hollywood(name){
    actors.push(name);
    console.clear();
    console.log('Actors');
    console.table(actors);
}

// Expression ( функциональный )

// const famousMovies = function(name){
//     movies.push(name);
//     console.clear();
//     console.log('Movies');
//     console.table(movies);
// }

const famousMovies = name => {
    movies.push(name);
    // console.clear();
    console.log('Movies');
    console.table(movies);
}

famousMovies('Pirates of Caribbean');
famousMovies('Mask');
famousMovies('Iron Man');
famousMovies('Maleficent');
