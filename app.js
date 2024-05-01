// Array
// N{1}
// function getInitialOdds(n) {
//   let odds = [];
//   for (let i = 1; odds.length < n; i += 2) {
//     odds.push(i);
//   }
//   return odds;
// }

// let result = getInitialOdds(5);
// console.log(result); // [1, 3, 5, 7, 9]

// N{2}

// function getEvenReverse(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i -= 2) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// let arr = [4, 5, 7, 8, 6, 9];
// let output = getEvenReverse(arr);
// console.log(output); // [6, 8, 4]

// N{3}

// function alternateEnds(arr) {
//   let result = [];
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     result.push(arr[left]);
//     if (left !== right) {
//       result.push(arr[right]);
//     }
//     left++;
//     right--;
//   }

//   return result;
// }

// let arr = [4, 5, 7, 8, 6, 9];
// let output = alternateEnds(arr);
// console.log(output.join(", "));
