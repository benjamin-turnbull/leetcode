/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return [i, j]; 
                break;
            }
        }
    }
    return null;
};

console.log(twoSum([2, 7, 11, 15], 9))