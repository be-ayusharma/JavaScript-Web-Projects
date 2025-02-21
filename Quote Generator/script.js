const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementsByClassName("new-quote");

let apiQuotes = [];

// Show New Quotes
function newQuote() {
  //Pick A Random Quote From APIQuote Array

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //Check If Author Field Is Empty Fill It With "Unknown"
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //Check Quote Length To Determine Styling
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

// Get Quotes From API

async function getQuotes() {
  const apiUrl = `https://f3217d7d-f010-415f-bbca-ec164d1a832b.mock.pstmn.io/quote/1`;
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.error("Something Went Wrong");
  }
}

//Tweet Quote

function tweetQuote() {}

// On Load

getQuotes();
