arr = [1, 4, 20, 3, 10, 5];

function kadane(arr) {
  let maxCurrent = arr[0];
  let maxGlobal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] + maxCurrent > arr[i]) {
      maxCurrent += arr[i];
    } else if (arr[i] > maxCurrent) {
      maxCurrent = arr[i];
    }
    console.log(maxCurrent);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
    // console.log(maxCurrent + " maxCurrentBefore")
    // maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    // console.log(arr[i] + " arr[i]")
    // console.log(maxCurrent + " maxCurretnAfter")
    // maxGlobal = Math.max(maxCurrent, maxGlobal);
    // console.log(maxGlobal + " Global")
    // console.log("**************")
  }
  return maxGlobal;
}


// arr = [1, 4, -20, 6, 10, -5];

// function kadane(arr) {
//   let maxCurrent = arr[0];
//   let maxGlobal = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     console.log(arr[i] + " arr[i]");
//     console.log(maxCurrent + " maxCurrent Before");
//     if (arr[i] + maxCurrent > arr[i]) {
//       maxCurrent += arr[i];
//       console.log(maxCurrent + " maxCurrent after");
//     } else if (arr[i] > maxCurrent) {
//       maxCurrent = arr[i];
//     }
//     if (maxCurrent > maxGlobal) {
//       console.log(maxGlobal + " Mglobal before");
//       maxGlobal = maxCurrent;
//       console.log(maxGlobal + " Mglobal after");
//     }
//     console.log("*****************");
//     // console.log(maxCurrent + " maxCurrentBefore")
//     // maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
//     // console.log(arr[i] + " arr[i]")
//     // console.log(maxCurrent + " maxCurretnAfter")
//     // maxGlobal = Math.max(maxCurrent, maxGlobal);
//     // console.log(maxGlobal + " Global")
//     // console.log("**************")
//   }
//   return maxGlobal;
// }

// kadane(arr);