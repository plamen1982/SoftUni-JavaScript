function animalType([animal]) {

    animal = animal.toLowerCase();

    switch(animal) {
        case 'dog':
            console.log('mammal');
            break;

        case 'snake':
            console.log('reptile');
            break;
        case 'crocodile':
            console.log('reptile');
            break;
        case 'tortoise':
            console.log('reptile');
            break;
        default:
            console.log('unknown');
            break;

    }
}

animalType(['dog']);
animalType(['snake']);
animalType(['cat']);
