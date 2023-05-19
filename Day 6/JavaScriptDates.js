function getDayName(dateString) {
    let dayNames=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName;
    let dateTemp = new Date(dateString);
     let dayIndex=dateTemp.getDay();
     dayName=dayNames[dayIndex];
    return dayName;
}