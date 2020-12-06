arr = [-1, 1.5, 2, 2.5, 4, 5];

target = 5;


function findElement(arr, target) {
  arr.sort((a, b) => a - b);
  
  let start = 0;
  let end = arr.length-1;

  while(start <= end) {
    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === target) {
      return console.log(arr[mid]);
    } else if(arr[mid] > target) {
      end = mid - 1;
    } else if(arr[mid] < target)  {
      start = mid + 1;
    }
  }
  return console.log("-1")
}

findElement(arr, target);

// function findElement(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;

//   while(start <= end) {
//     let mid = Math.floor((start + end)/2);

//     if(arr[mid] === target) {
//       return console.log(arr[mid]);
//     } else if(arr[mid] > target) {
//       end = mid -1;
//     } else if(arr[mid] < target) {
//       start = mid + 1;
//     }
//   }
//   return console.log("-1")
// }

// findElement(arr, target);

// function findElement(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//       let mid = Math.floor((start + end)/2);
//       if (target === arr[mid]) {
//         return console.log(arr[mid]);
//       } else if (target < arr[mid]) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//     return console.log("-1");
// }

// findElement(arr, target);

