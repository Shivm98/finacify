// /pages/api/daily-tip.js
export default function handler(req, res) {
  const tips = [
    {
      content:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      content:
        "Do not save what is left after spending, but spend what is left after saving.",
      author: "Warren Buffett",
    },
    {
      content: "Invest in yourself. Your career is the engine of your wealth.",
      author: "Paul Clitheroe",
    },
    {
      content:
        "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
      author: "Philip Fisher",
    },
    {
      content:
        "Wealth is not about having a lot of money; it's about having a lot of options.",
      author: "Chris Rock",
    },
    {
      content: "An investment in knowledge pays the best interest.",
      author: "Benjamin Franklin",
    },
    {
      content:
        "It's not your salary that makes you rich, it's your spending habits.",
      author: "Charles A. Jaffe",
    },
    {
      content:
        "The individual investor should act consistently as an investor and not as a speculator.",
      author: "Benjamin Graham",
    },
    {
      content: "Time in the market beats timing the market.",
      author: "Ken Fisher",
    },
    {
      content:
        "Never depend on a single income. Make investment to create a second source.",
      author: "Warren Buffett",
    },
    {
      content:
        "The four most dangerous words in investing are: 'This time it's different.'",
      author: "Sir John Templeton",
    },
    {
      content:
        "Financial peace isn’t the acquisition of stuff. It’s learning to live on less than you make, so you can give money back and have money to invest.",
      author: "Dave Ramsey",
    },
    {
      content:
        "The goal isn’t more money. The goal is living life on your terms.",
      author: "Chris Brogan",
    },
    {
      content:
        "A budget is telling your money where to go instead of wondering where it went.",
      author: "Dave Ramsey",
    },
    {
      content:
        "You can be young without money, but you can’t be old without it.",
      author: "Tennessee Williams",
    },
    {
      content: "In investing, what is comfortable is rarely profitable.",
      author: "Robert Arnott",
    },
    {
      content:
        "Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.",
      author: "Zig Ziglar",
    },
    {
      content: "Wealth is the ability to fully experience life.",
      author: "Henry David Thoreau",
    },
    {
      content:
        "The real measure of your wealth is how much you’d be worth if you lost all your money.",
      author: "Anonymous",
    },
    {
      content: "I’d like to live as a poor man with lots of money.",
      author: "Pablo Picasso",
    },
    {
      content:
        "Not everything that can be counted counts, and not everything that counts can be counted.",
      author: "Albert Einstein",
    },
    {
      content:
        "You must gain control over your money or the lack of it will forever control you.",
      author: "Dave Ramsey",
    },
    {
      content:
        "Formal education will make you a living; self-education will make you a fortune.",
      author: "Jim Rohn",
    },
    {
      content:
        "The secret to wealth is simple: find a way to do more for others than anyone else does. Become more valuable. Do more. Give more. Be more. Serve more.",
      author: "Tony Robbins",
    },
    {
      content: "The more you learn, the more you earn.",
      author: "Warren Buffett",
    },
    {
      content:
        "The quickest way to double your money is to fold it in half and put it back in your pocket.",
      author: "Will Rogers",
    },
    {
      content:
        "Don't be addicted to money. Work to learn. Don't work for money. Work for knowledge.",
      author: "Robert Kiyosaki",
    },
    {
      content: "The key to making money is to stay invested.",
      author: "Suze Orman",
    },
    {
      content:
        "If you don't find a way to make money while you sleep, you will work until you die.",
      author: "Warren Buffett",
    },
    {
      content: "Never spend your money before you have earned it.",
      author: "Thomas Jefferson",
    },
    {
      content:
        "Wealth is like a tree, it grows from a small seed. The sooner you plant that seed, the sooner shall the tree grow.",
      author: "George S. Clason",
    },
    {
      content:
        "Your net worth to the world is usually determined by what remains after your bad habits are subtracted from your good ones.",
      author: "Benjamin Franklin",
    },
    {
      content:
        "Do not be embarrassed by your failures, learn from them and start again.",
      author: "Richard Branson",
    },
    {
      content:
        "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind.",
      author: "T.T. Munger",
    },
    {
      content:
        "If money is your hope for independence you will never have it. The only real security that a man can have in this world is a reserve of knowledge, experience and ability.",
      author: "Henry Ford",
    },
    {
      content: "The way to build your savings is by spending less each month.",
      author: "Suze Orman",
    },
    {
      content:
        "Financial freedom is available to those who learn about it and work for it.",
      author: "Robert Kiyosaki",
    },
    {
      content:
        "Don’t tell me what you value, show me your budget, and I’ll tell you what you value.",
      author: "Joe Biden",
    },
    {
      content: "Money is a terrible master but an excellent servant.",
      author: "P.T. Barnum",
    },
    {
      content: "You don’t have to be a miser, just be wiser with your money.",
      author: "Denzel Washington",
    },
    {
      content: "To get rich, you have to be making money while you’re asleep.",
      author: "David Bailey",
    },
    {
      content:
        "A wise person should have money in their head, but not in their heart.",
      author: "Jonathan Swift",
    },
    {
      content:
        "Wealth consists not in having great possessions, but in having few wants.",
      author: "Epictetus",
    },
    {
      content: "The most powerful force in the universe is compound interest.",
      author: "Albert Einstein",
    },
    {
      content: "The rich invest in time, the poor invest in money.",
      author: "Warren Buffett",
    },
    {
      content: "Money grows on the tree of persistence.",
      author: "Japanese Proverb",
    },
    {
      content: "Know what you own, and know why you own it.",
      author: "Peter Lynch",
    },
    {
      content:
        "The only way to permanently take control of your financial life is to dig deep and fix the root problem.",
      author: "Suze Orman",
    },
    {
      content:
        "Too many people spend money they earned to buy things they don't want to impress people that they don't like.",
      author: "Will Rogers",
    },
    {
      content:
        "The man who does more than he is paid for will soon be paid for more than he does.",
      author: "Napoleon Hill",
    },
    {
      content:
        "When you understand that your self-worth is not determined by your net-worth, then you'll have financial freedom.",
      author: "Suze Orman",
    },
  ];

  // Select three random tips
  const selectedTips = [];
  while (selectedTips.length < 3) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    if (!selectedTips.includes(randomTip)) {
      selectedTips.push(randomTip);
    }
  }

  res.status(200).json(selectedTips);
}
