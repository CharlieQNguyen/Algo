arr = [7, 2, 10, 5, 15];

function maxHeap(arr) {
  let arr2 = [];
  //let currentIndex = 0;
  let p;
  for (let i = 0; i < arr.length; i++) {
    let currentIndex = i;
    arr2.push(arr[i]);
    console.log(arr2);
    while (currentIndex > 0) {
      if (i % 2 === 0) {
        p = (currentIndex - 2) / 2;
      } else {
        p = (currentIndex - 1) / 2;
      }
      if (arr2[p] < arr2[currentIndex]) {
        let temp = arr[p];
        arr2[p] = arr2[currentIndex];
        arr2[currentIndex] = temp;
        currentIndex = p;
      } else {
        break;
      }
      //currentIndex = p;
    }
  }
  console.log(arr2);
}

maxHeap(arr);



// arr = [7, 2, 10, 5, 15, 1, 8, 3, 3];

// function maxHeap(arr) {
//   let arr2 = [];
//   //let + = 0;
//   let p;
//   for (let i = 0; i < arr.length; i++) {
//     console.log("i:" + i);
//     let currentIndex = i;
//     console.log("ci0:" + currentIndex);
//     arr2.push(arr[i]);
//     console.log("arr:" + arr2);
//     while (currentIndex > 0) {
//       if (i % 2 == 0) {
//         p = (currentIndex - 2) / 2;
//       } else {
//         p = (currentIndex - 1) / 2;
//       }
//       if (p < 0) {
//         p = 0;
//       }
//       console.log("p1:" + p);
//       console.log("ci1:" + currentIndex);
//       if (arr2[p] < arr2[currentIndex]) {
//         let temp = arr2[p];
//         arr2[p] = arr2[currentIndex];
//         arr2[currentIndex] = temp;
//         currentIndex = p;
//         console.log("arr2:" + arr2);
//         console.log("p2:" + p);
//         console.log("ci2:" + currentIndex);
//       } else {
//         break;
//       }
//       //+ = p;
//     }
//   }
//   console.log(arr2);
//   return arr2;
// }

// maxHeap(arr);