// Create a date
let d1 = new Date(2023, 2, 15, 4, 45);
alert( d1 );

// Show a weekday
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()];
}

// European weekday
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}

// Which day of month was many days ago?
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}


// Last day of month?
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}


// How many seconds have passed today?
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}


// How many seconds till tomorrow?
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now; // difference in milisec
    return Math.round(diff / 1000); // to seconds
}

// Format the relative date
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'right now';
    } else if (diffMin < 1) {
        return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
        return `${diffMin} min. ago`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}