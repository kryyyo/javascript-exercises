const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
        
    } else {
        return false
    }
};

leapYears(1900)
leapYears(1985)

// Do not edit below this line
module.exports = leapYears;
