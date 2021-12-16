const sumAll = function(numberOne, numberTwo) {
    if(numberOne<0||numberTwo<0){
        return 'ERROR';
    }
    let small;
    let big;
    let sum=0;
    if (numberOne<numberTwo){
        small=numberOne;
        big=numberTwo;
    }else {
        small=numberTwo;
        big=numberOne;
    }
    for(i=small;i<big+1;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
