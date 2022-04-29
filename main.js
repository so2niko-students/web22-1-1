/*
Создайте веб-приложение, которое спрашивает у пользователя номер урока и возвращает время окончания этого урока. Время начала первого урока - 9:00. Длительность урока - 45 минут. Перерыв после четных уроков - 15 минут, перерыв после нечетных уроков - 5 минут.

Входные данные:
Число - целое число от 1 до 10

Выходные данные:
Текст - текстовое описание времени окончания в виде hh:mm

1 - 09:45
2 - 10:35
3 - 11:35 == 45 * 3 + (целое от((3 - 1) / 2) * 15) + (целое от(3 / 2) * 5) = 135 + 15 + 5 = 155 в часы = 2 ч, 35 минут == 9 + 2 ч = 11ч 35 минут 
4 - 12:25
5 - 13:25
6 - 14:15
7 - 15:15
8 - 16:05
9 - 17:05
10 - 17:55
*/

function lesson1(lesson){
    if(lesson == 1) return '09:45';
    if(lesson == 2) return '10:35';
    if(lesson == 3) return '11:35';
    if(lesson == 4) return '12:25';
    if(lesson == 5) return '13:25';
    if(lesson == 6) return '14:15';
    if(lesson == 7) return '15:15';
    if(lesson == 8) return '16:05';
    if(lesson == 9) return '17:05';
    if(lesson == 10) return '17:55';

    return 'Ошибка. Введите число от 1 до 10';
}

