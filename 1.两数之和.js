/*
 * @Author: HopeNotDead 869132116@qq.com
 * @Date: 2022-08-04 16:15:03
 * @LastEditors: HopeNotDead 869132116@qq.com
 * @LastEditTime: 2022-08-05 12:27:11
 * @FilePath: \.leetcode\1.两数之和.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j]
  //     }
  //   }
  // }
  // return [-1, -1]
// }
const twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
}
let arr = [5, 7, 2, 15]
/* 
i=0 l=4 j=1
*/
console.log('twoSum', twoSum(arr, 9))
// @lc code=end
