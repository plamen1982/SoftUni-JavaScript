function salary(args) {
 let salary = Number(args[0])
 let servitudeTime = Number(args[1])
 let isSindicate = String(args[2])
 let years = 0
 let raise = 0
 let yearsToMaxSalary = 0
 let currentSalary;

    while(salary < 5000) {
        if(years === servitudeTime) {
            currentSalary = salary
        } 
        salary += salary * 0.06
        if(salary <= 5000) {
            if(isSindicate === "Yes") {
                salary -= salary * 0.01
                years++
        
                if(years % 5 === 0 && raise === 0) {
                    salary += 100 
                    raise++
                }
                if(years % 5 === 0 && raise === 1) {
                    salary += 200
                    raise = 0
                }
            } else {
                years++
        
                if(years % 5 === 0 && raise === 0) {
                    salary += 100 
                    raise++
                }
                if(years % 10 === 0 && raise === 1) {
                    salary += 200
                    raise = 0
                }
            }
        } else {
            salary = 5000
        }
    }
    if(!currentSalary) {
        currentSalary = 5000
    }

    let diff = years - servitudeTime
    if(diff > 0) {
        console.log(`Current salary: ${currentSalary.toFixed(2)}`)
        console.log(`${years - servitudeTime} more years to max salary.`)
    } else {
        console.log(`Current salary: ${currentSalary.toFixed(2)}`)
        console.log(`0 more years to max salary.`)
    }
}

// salary(["1052.21" , "12", "No"])
salary(["3980" , "8", "Yes"])
