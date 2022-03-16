const removeFromArray = function(array, element) {
    let index = array.lastindexOf(element)

    array.splice(index, 1)

    return array
};

removeFromArray([1,2,3], 3)

// Do not edit below this line
module.exports = removeFromArray;
