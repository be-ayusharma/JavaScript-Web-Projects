const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.querySelector(".new-quote");

let apiQuotes = [];

// Show New Quote
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  authorText.textContent = quote.author ? quote.author : "Unknown";

  // Add styling for long quotes
  if (quote.quote.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.quote;
}

// Get Quotes From API
async function getQuotes() {
  const apiUrl = `https://dummyjson.com/quotes`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    apiQuotes = data.quotes; // Extract quotes array
    newQuote(); // Show a quote
  } catch (error) {
    console.error("Something Went Wrong", error);
  }
}

// Tweet Quote
function tweetQuote() {
  const quote = quoteText.textContent;
  const author = authorText.textContent;
  // const twitterUrl = https://twitter.com/intent/tweet?text="${quote}" - ${author};
  // window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
