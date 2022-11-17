// calendar.js

function makeCalendar(month, startDay, lastDate) { // startDay:시작위치 lastDate:마지막날짜
    let str = "<table border=1>";
    str += "<caption>" + month + "월" + "</caption>"
    let days = ["일", "월", "화", "수", "목", "금", "토"];


    // thead
    str += "<thead><tr>";
    for (let day of days) {
        str += "<th>" + day + "요일" + "</th>";
    }
    str += "</tr></thead>";


    // tbody
    str += "<tbody><tr>"
    for (let cnt = 1; cnt < startDay; cnt++) {
        str += "<td></td>";
    }
    for (let day = 1; day <= lastDate; day++) {
        str += "<td>" + day + "</td>";
        if ((startDay + day - 1) % 7 == 0) {
            str += "</tr><tr>";
        }
    }
    str += "</tr></tbody></table>";
    document.write(str);
}

function getFirstDay(month) { // 첫번째날짜 가져오는 함수

    // 1)
    switch(month) {
        case 1: return 7;
        case 2: return 3;
        case 3: return 3;
        case 4: return 6;
        case 5: return 1;
        case 6: return 4;
        case 7: return 6;
        case 8: return 2;
        case 9: return 5;
        case 10: return 7;
        case 11: return 3;
        case 12: return 5;
    }
}

    // 2)
//     if (month == 11) {
//         return 3;
//     } else if (month == 12) {
//         return 5;
//     } else if (month == 10) {
//         return 7;
//     }
// }

function getLastDay(month) { // 마지막날짜 가져오는 함수
    switch(month) {
        case 1: return 31;
        case 2: return 28;
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
    }
}
let month = 3;
makeCalendar(month, getFirstDay(month), getLastDay(month));