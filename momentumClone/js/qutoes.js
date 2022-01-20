const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.-Oscar Wilde",
    author: "Oscar Wilde",
  },
  {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "It is better to be hated for what you are than to be loved for what you are not."
    ,author: "Ande Gide",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "For every minute you are angry you lose sixty seconds of happiness.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "If you judge people, you have no time to love them.",
    author: "Mother Teresa",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;