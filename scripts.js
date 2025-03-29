const quotes = [
    { quote: "Act as if what you do makes a difference.", author: "William James" },
    { quote: "Success is the sum of small efforts, repeated.", author: "Robert Collier" },
    { quote: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
    { quote: "No pressure, no diamonds.", author: "Thomas Carlyle" },
    { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { quote: "Be the hero of your own story.", author: "Unknown" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { quote: "It is always the simple that produces the marvelous.", author: "Amelia Barr" },
    { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", author: "Jamie Paolinetti" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
    { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { quote: "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.", author: "William James" },
    { quote: "I never dreamed about success. I worked for it.", author: "Estée Lauder" },
    { quote: "Don't let what you cannot do interfere with what you can do.", author: "John R. Wooden" },
    { quote: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
    { quote: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
    { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "Do what you feel in your heart to be right – for you'll be criticized anyway.", author: "Eleanor Roosevelt" },
    { quote: "It is not length of life, but depth of life.", author: "Ralph Waldo Emerson" },
    { quote: "Tough times never last, but tough people do.", author: "Robert H. Schuller" },
    { quote: "To be the best, you must be able to handle the worst.", author: "Wilson Kanadi" },
    { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { quote: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
    { quote: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain" },
    { quote: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
    { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
    { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    { quote: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
    { quote: "Do what you love and the money will follow.", author: "Marsha Sinetar" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "The best way to appreciate your job is to imagine yourself without one.", author: "Oscar Wilde" },
    { quote: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
    { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
    { quote: "If you're going through hell, keep going.", author: "Winston Churchill" },
    { quote: "No great thing is created suddenly.", author: "Epictetus" },
    { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.", author: "Earl Nightingale" },
    { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
    { quote: "Sometimes later becomes never. Do it now.", author: "Unknown" },
    { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
    { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
    { quote: "Little things make big days.", author: "Unknown" },
    { quote: "Don't stop when you're tired. Stop when you're done.", author: "Marilyn Monroe" },
    { quote: "Failure is not the opposite of success; it's part of success.", author: "Arianna Huffington" },
    { quote: "If you want to achieve greatness stop asking for permission.", author: "Unknown" },
    { quote: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
    { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { quote: "Great things never come from comfort zones.", author: "Unknown" },
    { quote: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
    { quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
    { quote: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { quote: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
    { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
    { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { quote: "The harder the battle, the sweeter the victory.", author: "Les Brown" },
    { quote: "Your limitation—it’s only your imagination.", author: "Unknown" },
    { quote: "Dream bigger. Do bigger.", author: "Unknown" },
    { quote: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { quote: "It’s going to be hard, but hard does not mean impossible.", author: "Unknown" },
    { quote: "Don’t wait for opportunity. Create it.", author: "Unknown" },
    { quote: "Small steps in the right direction can turn out to be the biggest step of your life.", author: "Unknown" },
    { quote: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr." },
    { quote: "Opportunities are usually disguised as hard work, so most people don’t recognize them.", author: "Ann Landers" },
    { quote: "A year from now you may wish you had started today.", author: "Karen Lamb" },
    { quote: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
    { quote: "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.", author: "Rikki Rogers" },
    { quote: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" }
];

function newQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    // Fade out the quote
    quoteDisplay.style.opacity = 0;

    // Wait for the fade-out to complete before changing the quote
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];
        quoteDisplay.innerHTML = `"${selectedQuote.quote}"<br><br>- ${selectedQuote.author}`;

        // Fade in the new quote
        quoteDisplay.style.opacity = 1;
    }, 500); // Adjust this timeout to match your CSS transition-duration
}
