const getStringDate = (ms) => {
	const date = new Date(ms);

	const monthes = [
		'of January', 'of February', 'of March', 'of April', 
		'of May', 'of June', 'of July', 'of August', 
		'of Septeber', 'of October', 'of November', 'of December', 
	];

	const day = date.getDate();
	const month = monthes[date.getMonth()];
	const year = date.getFullYear();

	const stringDate = `${day} ${month} ${year}`;

	return stringDate;
}

const convert = (date) => {
    const nowDate = new Date();
    const yesterday = new Date(nowDate.getTime() - 1000 * 60 * 60 * 24);

    const timeDiff = nowDate.getTime() - date.getTime(); //miliseconds
    const timeToYesterday = nowDate.getHours() * 60 + nowDate.getMinutes(); //minutes
    const oneDayTime = 1000 * 60 * 60 * 24;
    const isToday = (timeDiff / 1000 / 60) < timeToYesterday;
    const isYesterday = !isToday && timeDiff < oneDayTime;
    const isOnWeek = !isToday && !isYesterday && timeDiff < timeToYesterday + 5 * oneDayTime;

    if(isToday) {
        return 'Today';
    } else if(isYesterday) {
        return 'Yesterday';
    } else if(isOnWeek) {
        const daysOfTheWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];
        const numOfDay = date.getDay();
        return daysOfTheWeek[numOfDay];
    } else {
        return getStringDate(ms);
    }
}

module.exports = convert;