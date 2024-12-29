const minHeap = require("./minHeap");

function kMultiplication(nums, k, multiplier) {
  let h = new minHeap(nums);
  let i = 0, t;
  while (t = h.pop()) {
    nums[i] = t;
    i++;
  }
  while (k > 0) {
    nums[0] *= multiplier;
    t = nums[0];
    if (nums.length > 1) {
      for (i = 1; i < nums.length; i++) {
        if (t > nums[i]) {
          nums[i - 1] = nums[i];
          if (i == (nums.length - 1))
            nums[i] = t;
        }
        else {
          nums[i - 1] = t;
          break;
        }
      }
    }
    k--;
  }
  return nums;
}
console.log(kMultiplication([2, 1, 3, 5, 6], 5, 2));
