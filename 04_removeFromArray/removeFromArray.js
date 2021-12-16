const removeFromArray = function(array,itemToRemove) {
    for(let x=0;x<arguments.length;x++){
        for(let i=0;i<array.length;i++){
            if (array[i]===arguments[x]){
                array.splice(i,1);
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
