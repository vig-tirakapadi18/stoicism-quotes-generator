const getQuoteBtn = document.getElementById('get-quote-btn');
const quoteEl = document.querySelector('.quote');
const authorEl = document.querySelector('.author');
const loaderEl = document.querySelector('.loader');
const quotesIconEl = document.querySelector('h3');

const setData = (loader, quote, author, quotesIcon) => {
        loaderEl.style.display = loader;
        quoteEl.innerText = quote;
        authorEl.innerText = author;
        quotesIconEl.style.display = quotesIcon;
}

const generateNewQuote = async () => {
        try {
                setData('block', '', '', 'none');

                // const url = 'https://api.quotable.io/random';        //All Quotes API 
                const url = 'https://stoic-quotes.com/api/quote';       //Stoics Quotes API
                const result = await fetch(url).then(resp => resp.json());

                setData('none', result.text, `~ ${result.author}`, 'block');
        } catch (error) {
                setData('none', null, null, 'none');
                getQuoteBtn.innerText = 'Error occurred. Try again later!'
                getQuoteBtn.classList.add('error');
        }

};

generateNewQuote();

getQuoteBtn.addEventListener('click', generateNewQuote);