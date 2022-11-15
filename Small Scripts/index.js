function mstoSeconds(seconds){
    return seconds * 1000
}


setInterval(getDate, mstoSeconds(1));

function getDate(){
    let date = new Date()

    let pretty_date = date.toLocaleString()
    console.log(pretty_date)
}
