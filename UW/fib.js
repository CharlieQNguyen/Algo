var fib = function(N) {
    // if (N <= 0){
    //     return 0;
    // }else if (N == 1){
    //     return 1;
    // }else if ( N > 1){
    //     return fib(N-2) + fib(N-1)
    // }

    let prev1 = 1;
    let prev2 = 1;
    let curr = 0

    if (N <=1){
        return 1
    }
    else{
        while ( curr < N){
            curr = prev1 + prev2
            if(curr > N){
                return curr
            }
            prev1 = prev2
            prev2 = curr
        }
        curr = prev1 + prev2
        prev1 = prev2
        prev2 = curr

        return curr
    }

};