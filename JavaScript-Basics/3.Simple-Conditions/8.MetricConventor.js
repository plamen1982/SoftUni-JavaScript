function metricConventor([arg1, arg2, arg3]) {

    let distance = Number(arg1);
    let fromDistance = arg2;
    let toDistance = arg3;

    if(fromDistance === 'mm') {
        distance = distance / 1000;
    } 
    if(fromDistance === 'cm') {
        distance = distance / 100;
    } 
    if(fromDistance === 'mi') {
        distance = distance / 0.000621371192;
    } 
    if(fromDistance === 'km') {
        distance = distance / 0.001;
    } 
    if(fromDistance === 'in') {
        distance = distance / 39.3700787;
    } 
    if(fromDistance === 'ft') {
        distance = distance / 3.2808399;
    } 
    if(fromDistance === 'yd') {
        distance = distance / 1.0936133;
    } 


    if(toDistance === 'mm') {
        distance = distance * 1000;
    } 
    if(toDistance === 'cm') {
        distance = distance *  100;
    } 
    if(toDistance === 'mi') {
        distance = distance *  0.000621371192;
    } 
    if(toDistance === 'km') {
        distance = distance *  0.001;
    } 
    if(toDistance === 'in') {
        distance = distance * 39.3700787;
    } 
    if(toDistance === 'ft') {
        distance = distance *  3.2808399;
    } 
    if(toDistance === 'yd') {
        distance = distance *  1.0936133;
    } 
    
    console.log(`${distance} ${toDistance}`)
}

metricConventor([12, 'km', 'ft']); 
metricConventor([150, 'mi', 'in']); 
metricConventor([450, 'yd', 'km']); 