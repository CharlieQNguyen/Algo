using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using HtmlAgilityPack;
using ScrapySharp.Network;

namespace CodingChallenge
{
    class Program
    {
        static readonly ScrapingBrowser Browser = new ScrapingBrowser();

        static void Main(string[] args)
        {
            if (args.Length == 0)
            {
                // Display message to user to provide parameters.
                Console.WriteLine("Please enter parameter values.");
                Console.Read();
            }
            else
            {
                // Get first parameter and assign to url
                var url = args[0];
                // [Optional] Get second parameter and assign to numWord
                // Default 10
                var numWord = args.Length == 2 ? args[1] : "10";
                // [Optional] Get third parameter and assign to exclusionWord
                // Then split by comma to become string array of words
                var exclusionWord = args.Length == 3 ? args[2].Split(",") : new[] { "" };
                CreateWordCount(url, int.Parse(numWord), exclusionWord);
            }
        }

        // Parse url to html
        static HtmlNode GetHtml(string url)
        {
            var webpage = Browser.NavigateToPage(new Uri(url));
            return webpage.Html;
        }

        static void CreateWordCount(string url, int numWord, string[] exclusionWord)
        {
            // Get content of url
            var html = GetHtml(url).InnerHtml;
            // Split by sections
            var sectionArray = html.Split("<h2><span class=\"mw-headline\" id=\"");
            // Get history section
            var historyArray = sectionArray[1].Split("\n");
            // Remove first line from history
            historyArray = historyArray.Skip(1).ToArray();
            // Join array by space
            var history = string.Join(" ", historyArray);
            // Remove all html tags
            history = Regex.Replace(history, @"(<([^>]+)>)", "");
            history = history.ToLower();
            // Convert to array of words separated by  whitespace
            // Get rid of all spaces and turn it into an array
            var words = history.Split(" ");
            // Keep track of counts
            var wordCounts = new Dictionary<string, int>();
            foreach (var word in words)
            {
                // Skip empty words
                if (string.IsNullOrEmpty(word)) continue;
                // Skip excluded words
                if (exclusionWord.Contains(word)) continue;
                // Increment word count
                wordCounts[word] = wordCounts.ContainsKey(word) ? wordCounts[word] + 1 : 1;
            }

            // Sort dictionary by descending value and take the first numWord
            wordCounts = wordCounts.OrderByDescending(x => x.Value).Take(numWord)
                .ToDictionary(x => x.Key, x => x.Value);

            // Print out result
            Console.WriteLine(ToPrettyString(wordCounts));
        }

        // Render output
        public static string ToPrettyString<TKey, TValue>(IDictionary<TKey, TValue> dict)
        {
            var str = new StringBuilder();
            str.Append($"{"Word".PadRight(18, ' ')}#of occurrences\n");
            foreach (var (key, value) in dict)
            {
                str.Append($"{key.ToString()?.PadRight(18, ' ')}{value}\n");
            }

            return str.ToString();
        }
    }
}