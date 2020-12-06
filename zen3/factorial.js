/*

print the Factorial of a given number

*/


num = 4;
function factorial(num) {
    let answer = 1;

    if(num == 0 || num == 1) {
        return answer;
    } else {
        for(let i = num; i >= 1; i--) {
            answer = answer * i;
        }
    }
    return console.log(answer);
}

factorial(num);