function scholarship(args) {
    //result Math.floor()
    let incomeInLevs = Number(args[0])
    let averageGrades = Number(args[1])
    let minWorkingSalary = Number(args[2])

    let scolarshipForExcellent;
    let scolarshiptForSocial;

    scolarshipForExcellent = Math.floor(averageGrades * 25)
    scolarshiptForSocial = Math.floor(minWorkingSalary * 0.35)

    let diff = scolarshipForExcellent - scolarshiptForSocial
    if(averageGrades >= 5.50 && diff >= 0) {
        
        console.log(`You get a scholarship for excellent results ${scolarshipForExcellent} BGN`)

    }else if(averageGrades >= 5.50) {

        console.log(`You get a scholarship for excellent results ${scolarshipForExcellent} BGN`)

    } else if(averageGrades >= 4.5 && incomeInLevs < minWorkingSalary ) {

        console.log(`You get a Social scholarship ${scolarshiptForSocial} BGN`)

    } else {
        console.log(`You cannot get a scholarship!`)
    }
}

// scholarship(["480.00", "4.60", "450.00"])
// scholarship(["300.00", "5.65", "420.00"])
scholarship(["1020.00", "5.65", "450.00"])