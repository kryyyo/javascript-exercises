const reverseString = function(string) {
    //Make a string into an array 

    let newString = string.split('').reverse().join('')

    return newString;
};

reverseString('hello there')

// Do not edit below this line
module.exports = reverseString;
