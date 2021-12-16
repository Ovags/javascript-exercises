const repeatString = function(stringToRepeat, amountOfRepetitions) {
    if (amountOfRepetitions<0){
        return 'ERROR';
    }
    let stringToReturn='';
    for(let i=0;i<amountOfRepetitions;i++){
        stringToReturn = stringToReturn.concat('',stringToRepeat);
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
