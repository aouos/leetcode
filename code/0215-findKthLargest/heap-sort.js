/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const heapify = (nums, idx, len) => {
  let max = idx;
  const left = idx * 2 + 1;
  const right = idx * 2 + 2;

  if (left < len && nums[left] > nums[max]) {
    max = left;
  }
  if (right < len && nums[right] > nums[max]) {
    max = right;
  }

  if (max !== idx) {
    [nums[idx], nums[max]] = [nums[max], nums[idx]];
    heapify(nums, max, len);
  }
};

const heapSort = (nums) => {
  let len = nums.length;

  for (let i = Math.floor(len >> 1) - 1; i >= 0; i--) {
    heapify(nums, i, len);
  }

  while (--len) {
    [nums[0], nums[len]] = [nums[len], nums[0]];
    heapify(nums, 0, len);
  }
  return nums;
};

var findKthLargest = function (nums, k) {
  const sorted = heapSort(nums);

  return sorted[sorted.length - k];
};
