/*
  steps to run code in node file, go to terminal to run code using node with command line below;
  // run code in step 1 for default top 10
  1. node challenge.js https://en.wikipedia.org/wiki/Microsoft 
  // run code step 2 to be able to filter by top 5 but can also do top 15 or more etc
  2. node challenge.js https://en.wikipedia.org/wiki/Microsoft 5
  // run code step 3 to be able to filter out by 10 words and also exclude the word you want in this example we filter in out.
  // can also exlude multiple words as well by excluding in, of, and  
    // https://en.wikipedia.org/wiki/Microsoft 10 in of and
  3. node challenge.js https://en.wikipedia.org/wiki/Microsoft 10 in
*/

const http = require("https");
const url = process.argv[2]; // first argument enter which is the URL
const num_words = process.argv[3] || 10; // passing the numbers it's 10 by default
const exclusions = process.argv.slice(4); // gets the exclusion
let content = "";
const req = http.request(url, function (res) {
  res.setEncoding("utf8");
  res.on("data", function (chunk) {
    // Append response chunk
    content += chunk;
  });
  res.on("end", function () {
    // Process final response
    processHttpBody(content);
  });
});
req.end();

// function below parse through html
function processHttpBody(content) {
  // Split by sections
  const sections = content.split('<h2><span class="mw-headline" id=');
  // Get history section
  let history = sections[1].split("\n");
  // Remove first line from history
  history.shift();
  // Join all the lines by space
  history = history.join(" ");
  // Remove all html tags
  history = history.replace(/(<([^>]+)>)/gi, "");
  history = history.toLowerCase();
  // Convert to array of words seperated by whitespace
  const words = history.split(/\s/); // get rid of all spaces and turn it into an array
  // Keep track of counts
  const wordCounts = {};
  for (const word of words) {
    // Skip empty words
    if (!word) continue;
    // Skip excluded words
    if (exclusions.includes(word)) continue;
    // Increment word count
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }
  // Convert hashtable into a 2d array
  const table = Object.keys(wordCounts).map((key) => [key, wordCounts[key]]);
  // Sort by count in descending order
  table.sort((a, b) => b[1] - a[1]);
  // Limit to max_words
  table.length = Math.min(num_words, table.length);
  // Render output
  let tableString = "word               | # of occurrences\n";
  for (const [word, count] of table) {
    // Pad end of word with space
    tableString += word.padEnd(18, " ") + " | " + count + "\n";
  }
  console.log(tableString);
}