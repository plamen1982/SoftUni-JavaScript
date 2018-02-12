function aThousanddaysOnEarth(arg) {
    let dateArray = arg.toString().split('-');
    let currentDate = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`)
    currentDate.setDate(currentDate.getDate() + 999);
    let newDateAfterAThaousandDays = new Date(currentDate.toISOString())   
    let outputDay = getDayAndMonth(newDateAfterAThaousandDays.getDate())
    let outputMonth = getDayAndMonth(newDateAfterAThaousandDays.getMonth() + 1)
    let outputYear = newDateAfterAThaousandDays.getFullYear()
    
    console.log(`${outputDay}-${outputMonth}-${outputYear}`)

    function getDayAndMonth(arg) {
        if(arg < 10) {
            return `0${arg}`
        }
        else {
            return arg
        }
    }
}

aThousanddaysOnEarth('?25-02-1995')
aThousanddaysOnEarth('?07-11-2003')
aThousanddaysOnEarth('?30-12-2005')
aThousanddaysOnEarth('?01-01-2012')
aThousanddaysOnEarth('?14-06-1980')

