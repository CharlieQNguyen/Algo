const assert = require("assert");

function problem1() {
  function intToRoaman(inputNum) {
    const romanValues = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
    ];
    let roman = "";
    for (const [romanString, n] of romanValues) {
      while (inputNum >= n) {
        roman += romanString;
        inputNum -= n;
      }
    }
    return roman;
  }

  // XII = 10+2
  assert.equal(intToRoaman(10 + 2), "XII");
  // VIII = 5+3 = 8
  assert.equal(intToRoaman(5 + 3), "VIII");
  // IX = 10-1 = 9
  assert.equal(intToRoaman(10 - 1), "IX");
  // XL = 50-10 = 40
  assert.equal(intToRoaman(50 - 10), "XL");
  // XC = 100-10 = 90
  assert.equal(intToRoaman(100 - 10), "XC");
  // MCMLXXXIV = 1000+(1000-100)+50+30+(5-1) = 1984
  assert.equal(intToRoaman(1984), "MCMLXXXIV");
}

function problem2() {
  function isAnagram(s, t) {
    const charCounts = {};
    for (const c of s) {
      charCounts[c] = (charCounts[c] || 0) + 1;
    }
    for (const c of t) {
      if (!charCounts[c]) {
        return false;
      }
      charCounts[c]--;
      if (charCounts[c] === 0) {
        delete charCounts[c];
      }
    }
    return Object.keys(charCounts).length === 0;
  }
}

function problem3() {
  function reverseWords(sentence) {
    return sentence
      .split(" ")
      .reverse()
      .join(" ");
  }

  function reverseWords2(sentence) {
    const words = sentence.split(" ");
    const wordsReverse = [];
    for (let i = words.length - 1; i >= 0; i--) {
      wordsReverse.push(words[i]);
    }
    return wordsReverse.join(" ");
  }

  function reverseWords3(sentence) {
    const words = sentence.split(" ");
    let reversedSentence = "";
    for (let i = words.length - 1; i >= 0; i--) {
      reversedSentence += words[i];
      if (i !== 0) {
        reversedSentence += " ";
      }
    }
    return reversedSentence;
  }

  function reverseWords4(sentence) {
    const words = [];
    let word = "";
    for (const c of sentence) {
      if (c === " ") {
        words.push(word);
        word = "";
      } else {
        word += c;
      }
    }
    words.push(word);

    let reversedSentence = "";
    for (let i = words.length - 1; i >= 0; i--) {
      reversedSentence += words[i];
      if (i !== 0) {
        reversedSentence += " ";
      }
    }
    return reversedSentence;
  }

  assert.equal(reverseWords4("Hello world"), "world Hello");
}

function problem4() {
  function makeChange(n) {
    const coinDenominations = [25, 10, 5, 1];
    const coinsNeeded = {};
    for (const c of coinDenominations) {
      while (n >= c) {
        coinsNeeded[c] = (coinsNeeded[c] || 0) + 1;
        n -= c;
      }
    }
    return coinsNeeded;
  }

  assert.deepEqual(makeChange(50), {
    25: 2
  });

  assert.deepEqual(makeChange(10), {
    10: 1
  });

  assert.deepEqual(makeChange(124), {
    25: 4,
    10: 2,
    1: 4
  });
}

function problemHard2() {
  function findIntersection(rect1, rect2) {
    return {
      top: Math.max(rect1.top, rect2.top),
      bottom: Math.min(rect1.bottom, rect2.bottom),
      left: Math.max(rect1.left, rect2.left),
      right: Math.min(rect1.right, rect2.right)
    };
  }

  assert.deepEqual(
    findIntersection(
      { top: 10, bottom: 50, left: 10, right: 100 },
      { top: 30, bottom: 100, left: 20, right: 200 }
    ),
    { top: 30, bottom: 50, left: 20, right: 100 }
  );
}

function problemHard3() {
  function paintBucket(image, bucketX, bucketY) {
    image[bucketY][bucketX] = 1;
    const neighbors = [
      [bucketY + 1, bucketX],
      [bucketY - 1, bucketX],
      [bucketY, bucketX + 1],
      [bucketY, bucketX - 1]
    ];
    for (const [y, x] of neighbors) {
      const neighborValue = (image[y] || [])[x];
      if (neighborValue !== undefined) {
        if (neighborValue === 0) {
          paintBucket(image, x, y);
        }
      }
    }
    return image;
  }

  const inputImage = [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0]
  ];
  const expectedImage = [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 0, 0],
    [0, 1, 0, 1, 0, 0, 0]
  ];
  assert.deepEqual(
    paintBucket(
      [
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0, 0, 0]
      ],
      3,
      1
    ),
    [
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 1, 0, 0],
      [0, 1, 0, 1, 0, 0, 0]
    ]
  );

  assert.deepEqual(
    paintBucket(
      [
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0, 0, 0]
      ],
      4,
      4
    ),
    [
      [0, 0, 1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0, 1, 1],
      [0, 1, 0, 1, 0, 1, 1],
      [0, 1, 0, 1, 1, 1, 1],
      [0, 1, 0, 1, 1, 1, 1]
    ]
  );
}

function problem5() {
  // O(n*log(n))
  function shuffle0(deck) {
    return deck.sort((a, b) => (Math.random() > 0.5 ? 1 : -1));
  }

  // O(n^2) time
  function shuffle1(deck) {
    const shuffled = [];
    while (deck.length > 0) {
      // Math.random() returns a number between 0 and 1
      const randomIndex = Math.floor(Math.random() * deck.length);
      const randomCard = deck.splice(randomIndex, 1)[0];
      shuffled.push(randomCard);
    }
    return shuffled;
  }

  // O(n) time O(n) space
  function shuffle2(deck) {
    const shuffled = [];
    const cards = {};
    for (const card of deck) {
      cards[card] = true;
    }
    while (Object.keys(cards).length > 0) {
      const randomIndex = Math.floor(Math.random() * Object.keys(cards).length);
      const randomCard = Object.keys(cards)[randomIndex];
      shuffled.push(Number(randomCard));
      delete cards[randomCard];
    }
    return shuffled;
  }
  console.log(shuffle2([1, 2, 3, 4, 5, 6]));
}

function problem6() {
  // O(n) addition
  const list = [];

  // function existsInList(entry) {
  //     for (const e of list) {
  //         if (entry.dollar === e.dollar && entry.date === e.date) {
  //             return true;
  //         }
  //     }
  //     return false;
  // }

  // function addEntry(entry) {
  //     if(existsInList(entry) === false) {
  //         list.push(entry);
  //     }
  // }

  function addEntry(entry) {
    let existsInList = false;
    for (let i = 0; i < list.length; i++) {
      if (entry.dollar === list[i].dollar && entry.date === list[i].date) {
        existsInList = true;
      }
    }
    if (existsInList === false) {
      list.push(entry);
    }
  }

  addEntry({
    dollar: 11.5,
    date: "10-30-2019"
  });

  addEntry({
    dollar: 11.5,
    date: "10-30-2019"
  });

  addEntry({
    dollar: 11.2,
    date: "10-30-2019"
  });

  assert.deepEqual(list, [
    {
      dollar: 11.5,
      date: "10-30-2019"
    },
    {
      dollar: 11.2,
      date: "10-30-2019"
    }
  ]);
}

function problem6b() {
  // O(1) addition
  const list = new Map();

  function addEntry(entry) {
    list.set([entry.dollar, entry.date].join(" "), entry);
  }

  addEntry({
    dollar: 11.5,
    date: "10-30-2019"
  });

  addEntry({
    dollar: 11.5,
    date: "10-30-2019"
  });

  addEntry({
    dollar: 11.2,
    date: "10-30-2019"
  });

  assert.deepEqual(
    new Set(list.values()),
    new Set([
      {
        dollar: 11.5,
        date: "10-30-2019"
      },
      {
        dollar: 11.2,
        date: "10-30-2019"
      }
    ])
  );
}

function problem7() {
  function fixParentesis(s) {
    const stack = [];
    const solution = [];
    const filteredSolution = [];

    for (const c of s) {
      if (c === "(") {
        stack.push(c);
        solution.push(c);
      } else if (c === ")") {
        if (stack.length > 0) {
          stack.pop();
          solution.push(c);
        }
      } else {
        solution.push(c);
      }
    }

    for (let i = solution.length - 1; i >= 0; i--) {
      const c = solution[i];
      if (stack.length > 0 && c === "(") {
        stack.pop();
      } else {
        filteredSolution.push(c);
      }
    }

    return filteredSolution.reverse().join("");
  }

  function fixParentesis2(s) {
    const stack = [];
    const solution = s.split("");

    for (let i = 0; i < solution.length; i++) {
      const c = solution[i];
      if (c === "(") {
        stack.push(c);
      } else if (c === ")") {
        if (stack.length > 0) {
          stack.pop();
        } else {
          solution[i] = "";
        }
      }
    }

    for (let i = solution.length - 1; i >= 0; i--) {
      const c = solution[i];
      if (stack.length === 0) {
        break;
      }
      if (c === "(") {
        stack.pop();
        solution[i] = "";
      }
    }

    return solution.join("");
  }

  assert.equal(fixParentesis2("(asdf)"), "(asdf)");
  assert.equal(fixParentesis2("(asdf"), "asdf");
  assert.equal(fixParentesis2("asdf)"), "asdf");
  assert.equal(fixParentesis2(")((asdf)"), "(asdf)");
  assert.equal(fixParentesis2("asd)asd(sdf"), "asdasdsdf");
  assert.equal(fixParentesis2("())()((("), "()()");
}

function problem8() {
  function isWord(str) {
    return ["this", "is", "a", "awesome", "i", "some", "we"].includes(
      str.toLowerCase()
    );
  }

  assert.equal(isWord("this"), true);
  assert.equal(isWord("this2"), false);

  function isMadeOfWords(str) {
    return false;
  }

  assert.equal(isMadeOfWords("ThisIsAwesome"), true);
  assert.equal(isMadeOfWords("ThisIsNotAwesome"), false);
}

function problem9() {
  function isSorted(list) {
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        return false;
      }
    }
    return true;
  }

  assert.equal(isSorted(["a", "b", "c"]), true);
  assert.equal(isSorted(["a", "c", "b"]), false);
  assert.equal(isSorted(["a"]), true);
}

function problem10() {
  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    let hash = {};
    for (let i = 0; i < str1.length; i++) {
      if (hash[str1[i]]) {
        hash[str1[i]] += 1;
      } else {
        hash[str1[i]] = 1;
      }
    }
    for (let i = 0; i < str2.length; i++) {
      if (!hash[str2[i]]) {
        return false;
      }
      hash[str2[i]] -= 1;
    }
    return true;
  }

  assert.equal(isAnagram("asdf", "fdsa"), true);
  assert.equal(isAnagram("asdf", "aaaa"), false);
}

problem10();

// reverse tokenized get rid of trailing space
str = "One Two Three Hello World";

function reverse(str) {
  let stringX = "";
  strRestult = str.split(" ");
  while (strRestult.length > 0) {
    stringX += strRestult.pop();
    if (strRestult.length !== 0) {
      stringX += " ";
    }
  }
  console.log(stringX);
  return stringX;
}

reverse(str);