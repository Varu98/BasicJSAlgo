function trapWater(arr) {
  const n = arr.length;
  if (n <= 2) return 0;

  let water = 0;
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = n - 1;

  while (left < right) {
    console.log("left", arr[left], "right", arr[right]);
    if (arr[left] < arr[right]) {
      console.log("here left won ", [arr[left], arr[right]], "\n");
      if (arr[left] > leftMax) {
        leftMax = arr[left];
      } else {
        water += leftMax - arr[left];
      }
      left++;
    } else {
      console.log("here right won", [arr[right], arr[left]], "\n");

      if (arr[right] > rightMax) {
        rightMax = arr[right];
      } else {
        water += rightMax - arr[right];
      }
      right--;
    }
  }

  console.log(water);
}

trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
