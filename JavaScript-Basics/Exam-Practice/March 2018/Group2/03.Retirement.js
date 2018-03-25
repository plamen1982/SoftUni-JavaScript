function retirement(args) {
    let sex = String(args[0])
    let agePerson = Number(args[1])
    let expirience = Number(args[2])
    let diffExpirienceMale;
    let diffYearsMale;
    let diffExpirienceFemale;
    let diffYearsFemale;

    // console.log(`Sex: ${sex} agePerson: ${agePerson} expirience: ${expirience}`)
    if(sex == 'male' || sex == 'female') {
        if(sex == 'male') {
            diffExpirienceMale = 38 - expirience; 
            diffYearsMale = 64 - agePerson;

            if(agePerson >= 64 && expirience >= 38) {
                console.log(`Ready to retire at ${agePerson} and ${expirience} years of experience!`)
            } else if(agePerson >= 64 && expirience < 38){
                console.log(`Old enough, but haven't worked enough. Work experience left to retirement: ${diffExpirienceMale}.`)

            } else if(agePerson < 64 && expirience >= 38) {
                console.log(`Worked enough, but not old enough. Years left to retirement: ${diffYearsMale}.`)

            } else {
                console.log(`Too early. Years left to retirement: ${Math.abs(diffYearsMale)}. Work experience left to retirement: ${diffExpirienceMale}.`)   
            }
        } else {
            diffExpirienceFemale = 35 - expirience; 
            diffYearsFemale = 61 - agePerson;

            if(agePerson >= 61 && expirience >= 35) {
                console.log(`Ready to retire at ${agePerson} and ${expirience} years of experience!`)
            } else if(agePerson >= 61 && expirience < 35){
                console.log(`Old enough, but haven't worked enough. Work experience left to retirement: ${diffExpirienceFemale}.`)

            } else if(agePerson < 61 && expirience >= 35) {
                console.log(`Worked enough, but not old enough. Years left to retirement: ${diffYearsFemale}.`)

            } else {
                console.log(`Too early. Years left to retirement: ${Math.abs(diffYearsFemale)}. Work experience left to retirement: ${diffExpirienceFemale}.`)   
            }
        }
    } else {
        console.log(`Invalid input.`)        
    }
}

retirement(["male", 63, 40])
// retirement(["female", 63, 36])