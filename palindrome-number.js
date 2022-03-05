/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var y = "";
    for (var i = x.length - 1; i >= 0; i--) {
        y += str[i];
    }
    if (x = y) {
        return "Is a palindrome.";
    }
    else {
        return "Is not a palindrome.";
    }
};

console.log(isPalindrome(121));