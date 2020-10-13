// import java.util.*;
// public class Test {
// 	public static void main(String[] args) {
// 		int [] input = {-4, 8, 6, -5, 6, -2, 1, 2, 3, -11};
// 		int j = 0, i;
// 		for(i = 0; i < input.length; i++)
// 		{
// 			if(input[i] <= 0)
// 			{
// 				int temp = input[i];
// 				input[i] = input[j];
// 				input[j] = temp;
// 				j++;
// 			}
// 		}
// 		System.out.println(Arrays.toString(input));
// 	}
// }

arr = [ 4, -3, 2, -5, 5, -1, 3 ];

output= [-3,-5, -1, 4, 2, 5, 3]

function negToPos(arr) {

    let j = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] <= 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return console.log(arr)
}

negToPos(arr);