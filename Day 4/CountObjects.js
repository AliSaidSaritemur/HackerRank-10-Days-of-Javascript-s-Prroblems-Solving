function getCount(objects) {
    let equalNumCounter=0;
    for(let nums of objects){
    equalNumCounter += nums.x === nums.y && 1;
    }
    return equalNumCounter;
}