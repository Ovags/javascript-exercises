const reverseString = function(str) {
    let reversedString = new Array();
    for(let i=0;i<str.length;i++){
        reversedString[i]=str.charAt(str.length-(i+1));
    }
    reversedString=reversedString.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
