/*Подсчитайте количество дубликатов
Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр, не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры.

Пример
"abcde" -> 0 # символы не повторяются более одного раза
"aabbcde" -> 2 # "а" и "б"
"aabBcde" -> 2 # 'a' встречается дважды и 'b' дважды (`b` и `B`)
"indivisibility " -> 1 # 'i' встречается шесть раз
"Indivisibilities" -> 2 # 'i' встречается семь раз, а 's' встречается дважды
"aA11" -> 2 # "а" и "1"
"ABBA" -> 2 # "A" и "B" встречаются дважды
*/

const count = str => {
    const voc = {};
    const strLen = str.length;
    let answ = 0;
    for(let i = 0; i < strLen; i += 1){
        const l = str[i].toLowerCase();
        if(voc[l]){
            voc[l] += 1;
        }else{
            voc[l] = 1;
        }
    }
    
    for(let k in voc){
        if(voc[k] > 1){
            answ += 1;
        }
    }

    // console.log(voc);
    return answ;
}

console.log('abcde', count("abcde") == 0);// -> 0 # символы не повторяются более одного раза
console.log('aabbcde', count("aabbcde") == 2);// -> 2 # "а" и "б"
console.log('aabBcde', count("aabBcde") == 2);// -> 2 # 'a' встречается дважды и 'b' дважды (`b` и `B`)
console.log('indivisibility', count("indivisibility") == 1);// -> 1 # 'i' встречается шесть раз
console.log('Indivisibilities', count("Indivisibilities") == 2);// -> 2 # 'i' встречается семь раз, а 's' встречается дважды
console.log('aA11', count("aA11") == 2);// -> 2 # "а" и "1"
console.log('ABBA', count("ABBA") == 2);// -> 2 # "A" и "B" встречаются дважды