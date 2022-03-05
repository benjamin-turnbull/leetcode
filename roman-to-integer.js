/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let integer = 0;
    let splitString = s.split("");
    for (i = 0; i < splitString.length; i++) {
        if (splitString[i] == "I") {
            if (splitString[i + 1] == "V") {
                integer += 4;
            }
            else if (splitString[i + 1] == "X") {
                integer += 9;
            }
            else {
                integer += 1;
            }
        }
        else if (splitString[i] == "V") {
            if (splitString[i - 1] == "I") {
                integer += 0;
            }
            else {
                integer += 5;
            }
        }
        else if (splitString[i] == "X") {
            if (splitString[i - 1] == "I") {
                integer += 0;
            }
            else if (splitString [i + 1] == "L") {
                integer += 40;
            }
            else if (splitString [i + 1] == "C") {
                integer += 90;
            }
            else {
                integer += 10;
            }
        }
        else if (splitString[i] == "L") {
            if (splitString[i - 1] == "X") {
                integer += 0;
            }
            else {
                integer += 50;
            }
        }
        else if (splitString[i] == "C") {
            if (splitString[i - 1] == "X") {
                integer += 0;
            }
            else if (splitString [i + 1] == "D") {
                integer += 400;
            }
            else if (splitString [i + 1] == "M") {
                integer += 900;
            }
            else {
                integer += 100;
            }
        }
        else if (splitString[i] == "D") {
            if (splitString[i - 1] == "C") {
                integer += 0;
            }
            else {
                integer += 500;
            }
        }
        else if (splitString[i] == "M") {
            if (splitString[i - 1] == "C") {
                integer += 0;
            }
            else {
                integer += 1000;
            }
        }
        else {
            integer +=0;
        }
    }
    return integer;
};

console.log(romanToInt("III"));