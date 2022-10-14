function arr(st){
    let temp_array = st.split(",");
    // text.slice(0, 5)

    let one = temp_array[0].slice(2,-1)
    let tow = temp_array[1].slice(1,-1)
    let three = temp_array[2].slice(1,-2)
            return [one,tow,three];
}

module.exports = arr;