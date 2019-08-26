function isValid(str) {
  if (str.length <= 1) {
    return false;
  }

  let matchingOpeningBracket, ch, closingIndex, capture, indexCapture;

  let stack = [];

  let openingBrackets = ["[", "{", "("];

  let closingBrackets = ["]", "}", ")"];

  let answer = [];

  for (let i = 0; i < str.length; i++) {
    // We're in the *FOR LOOP* now
    //this captures the value we are at in th string
    ch = str[i];

    //captures the value of ch index in position at closing bracket
    closingIndex = closingBrackets.indexOf(ch);

    // This is the first IF CHECK to see if *ch* is a Closing Bracket
    
    if (closingIndex > -1) {
      // The next line fires if *ch* IS a Closing Bracket

      // It sets *matchingOpeningBracket* to the corresponding Opening Bracket of *ch*

      matchingOpeningBracket = openingBrackets[closingIndex];

      // This nested IF CHECK checks if the Stack has 0 elements in it

      // OR after POPPING the last element off the stack...

      //    it checks to see if the popped Opening Bracket matches the corresponding Opening Bracket of *ch*

      if (stack.length == 0 || stack.pop() != matchingOpeningBracket) {
        return false;

        // There is NO else statement for this nested IF CHECK

        // If we pass this IF CHECK, we return *FALSE*,

        //    otherwise we go back to our *FOR LOOP* and increment *i*
      }

      // Else, we PUSH the Opening Bracket into the end of our Stack
    } else {
      stack.push(ch);
    }

    // These lines help us visualize our Stack

    console.log("*-*-*-*-*-*-*-*");

    console.log("We are at position " + i + " of our string");

    console.log("AND");

    console.log("Here is our STACK:");

    console.log(stack);

    console.log("*-*-*-*-*-*-*-*");

    console.log("");
  }
  for(let i = 0; i < stack.length; i++) {
    if(!stack[i]) {
        //if no value in stack then you know stack is empty
        break;
    } else {
        capture = stack[i];
        indexCapture = openingBrackets.indexOf(capture) //have the index position
        answer.push(closingBrackets[indexCapture]);
    }
  }
  console.log("Here are the missing brackets");
  return answer
}

console.log(isValid("(({}))"));
