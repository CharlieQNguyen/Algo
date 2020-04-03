/* write a function named find_range that accepts a list of int as parameter
and returns the range of values contained in the list. The range is defined to
be one more than the other difference between its largest and smallest elements.

for example, consider the list [12, 17, 6]. The largest element in this list is 17
and the smallest values are the same, the range is 1

*/

arr = [12, 17, 6];

function findRange(arr) {
  let largest = -Infinity;
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    } else if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  let range = largest - smallest + 1;
  console.log(range);
}

findRange(arr);

/*
def find_range(listnum):
    """
    The function is aiming to find the range from the biggest and the smallest number
    or when the both number are the same the range or be 1
    """
    max = listnum[0]
    min = listnum[0]
    for num in range(1,len(listnum)-1):
        if max < listnum[num]:
            max = listnum[num]
        elif min > listnum[num]:
            min = listnum[num]
    if max != min:
        return max - min +1
    else:
        return 1
*/