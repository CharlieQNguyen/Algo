/*
Write a function called fun_numbers that takes a start number and stop number and
returns a list of all "fun" numbers between start(inclusive) and stop (exclusive). A
number is "fun" if it is divisible by 2 or divisible by 5. The result should have the
numbers arranged from smallest to largest.

if there or no fun numbers within the range start(inclusive) and stop (exclusive)
(e.g. if stop is less than stsart meaning the range doesn't have any numbers in it), 
the function should return an empty list.

for example, fun_numbers(2, 16) should produce the list

[2, 4, 5, 6, 8, 10, 12, 14, 15]
 
While the call fun_numbers(5, 5) should produce the empty list: []
*/

//fun number has to be divisible by 2 or 5

num1 = 2;
num2 = 16;

function funNum(num1, num2) {
  let list = [];
  for(let i = num1; i < num2; i++) {
    if(i % 2 == 0) {
      list.push(i)
    } else if(i % 5 == 0) {
      list.push(i)
    }
  }
  return console.log(list)
}

funNum(num1, num2)