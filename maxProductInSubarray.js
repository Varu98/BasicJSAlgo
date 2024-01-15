/*
    Take size of an array and elements as the input and find the maximum product of the subarray.
*/

function maxProductSubarray(arr) {
  let prefix = 1;
  let suffix = 1;
  let ans = 0;
  let n = arr.length - 1;

  for (let i = 0; i < n; i++) {
    if (prefix == 0) prefix = 1;
    if (suffix == 0) suffix = 1;

    prefix = arr[i] * prefix;
    suffix = arr[n - i] * suffix;
    ans = Math.max(ans, Math.max(suffix, prefix));
  }

  console.log(ans);
  return ans;
}

maxProductSubarray([5, 2, 3, -2, 4, 5]);
