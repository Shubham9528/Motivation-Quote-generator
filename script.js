
const quoteBtn = document.getElementById("new-quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const url = "https://quotes-api-self.vercel.app/quote/";
let apiData = [];


async function getQuote() {
   
    fetch(url)
.then(response=>{
    if(!response.ok)
    {
        throw new Error('Fetching file.txt failed')
    }
    return response.json();
})
.then(data=>{
    // console.log(data.quote);
    apiData = data;
})
.catch(err=>console.log(err));
quote.innerText = apiData.quote;
author.innerText = apiData.author;


};
 quoteBtn.addEventListener("click", getQuote);



