function trapWater(heights) {
  let n = heights.length;

  if (n <= 2) return 0;

  let water = 0;
  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (heights[left] < heights[right]) {
      if (heights[left] > leftMax) {
        leftMax = heights[left];
      } else {
        water = water + leftMax - heights[left];
      }
      left++;
    } else {
      if (heights[right] > rightMax) {
        rightMax = heights[right];
      } else {
        water = water + rightMax - heights[right];
      }
      right--;
    }
  }
  console.log(water);
  return water;
}

trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
