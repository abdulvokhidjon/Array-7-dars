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

// N{4}

// function rangeSum(arr, K, L) {
//     if (K < 0 || L >= arr.length || K > L) {
//       return "Noto'g'ri kiritildi: K va L massiv chegaralarida bo'lishi kerak va K <= L";
//     }

//     return arr.slice(K, L + 1).reduce((sum, num) => sum + num, 0);
//   }

//   const arr = [1, 6, 9, 5, 8, 10, 15];
//   const result = rangeSum(arr, 2, 5);
//   console.log(result);

// N{5}

// function getSingleArr(arr) {
//     let result = [];

//     arr.forEach(element => {
//         if (arr.indexOf(element) === arr.lastIndexOf(element)) {
//             result.push(element);
//         }
//     });

//     return result;
// }

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// let output = getSingleArr(arr);
// console.log(output);

// N{6}

// function swapMinMax(arr) {
//   let minIndex = 0;
//   let maxIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) minIndex = i;
//     if (arr[i] > arr[maxIndex]) maxIndex = i;
//   }

//   [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];

//   console.log("Max:", arr[maxIndex]);
//   console.log("Min:", arr[minIndex]);
//   return arr;
// }

// const arr = [7, 4, 9, 2, 3, 1, 5];
// const result = swapMinMax(arr);
// console.log(result);

// N{7}


// function cyclicShift(arr) {
//   const lastElement = arr[arr.length - 1];

//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }

//   arr[0] = lastElement;

//   return arr;
// }

// const arr = [1, 5, 8, 9, 10];
// const result = cyclicShift(arr);
// console.log(result);
