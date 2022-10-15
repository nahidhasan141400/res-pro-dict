
function queryParse (obj){
    let {year,month,date,course,admit} = obj;
    
    if(admit === "1"){
        admit = true
    }else{
        admit = false
    }

    if(year &&  !month && !date && !course && !admit){
        return {year}
    }else if(!year &&  month && !date && !course && !admit){
        return {month}
    }else if(!year &&  !month && date && !course && !admit){
        return {date}
    }else if(!year &&  !month && !date && course && !admit){
        return {courses:course}
    }else if(!year &&  !month && !date && !course && admit){
        return {admited:admit}
    }else if(year &&  month && !date && !course && !admit){
        // year start
        return {year,month}
    }else if(year &&  !month && date && !course && !admit){
        return {year,date}
    }else if(year &&  !month && !date && course && !admit){
        return {year,courses:course}
    }else if(year &&  !month && !date && !course && admit){
        return {year,admited:admit}
        // month 
    }else if(!year &&  month && date && !course && !admit){
        return {month,date}
    }else if(!year &&  month && !date && course && !admit){
        return {month,courses:course}
    }else if(!year &&  month && !date && !course && admit){
        return {month,admited:admit}
        // date
    }else if(!year &&  !month && date && course && !admit){
        return {date,courses:course}
    }else if(!year &&  !month && date && !course && admit){
        return {date,admited:admit}
        // course
    }else if(!year &&  !month && !date && course && admit){
        return {course,admited:admit}
        // 3 com 
    }else if(year &&  month && date && !course && !admit){
        return {year,month,date}
    }else if(year &&  !month && date && course && !admit){
        return {year,date,courses:course}
    }else if(year &&  !month && !date && course && admit){
        return {year,courses:course,admited:admit}
    }else if(!year &&  month && date && course && !admit){
        return {month,date,courses:course}
    }else if(!year &&  month && !date && course && admit){
        return {month,courses:course,admited:admit}
    }else if(!year &&  !month && date && course && admit){
        return {date,courses:course,admited:admit}
        //4 con
    }else if(year &&  month && date && course && !admit){
        return {year,month,date,courses:course}
    }else if(year &&  !month && date && course && admit){
        return {year,date,courses:course,admited:admit}
    }else if(!year &&  month && date && course && admit){
        return {month,date,courses:course,admited:admit}
    }else if(year &&  month && date && course && !admit){
        return {year,month,date,courses:course}
    }else if(year &&  month && date && !course && admit){
        return {year,month,date,admited:admit}
    }else if(!year &&  month && date && course && admit){
        return {month,date,courses:course,admited:admit}
    }else if(year &&  month && date && course && admit){
        return {year,month,date,courses:course,admited:admit}
    }else if(year &&  month && !date && course && !admit){
        return {year,month,courses:course}
    }else if(year &&  month && !date && !course && admit){
        return {year,month,admited:admit}
    }else if(year &&  !month && date && !course && admit){
        return {year,date,admited:admit}
    }
}




module.exports = queryParse;