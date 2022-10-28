function convert (timeString){
    if(!timeString){
        return "no class"
    }
    const [sH,mi] = timeString.match(/([0-9]{1,2}):([0-9]{2})/).slice(1);
    const per = +sH < 12 ? "AM" : "PM";
    const h = +sH % 12 || 12;
    return `${h}:${mi} ${per}`
}

export default convert;