const quoteText = document.querySelector('.quote')
const authorName = document.querySelector('.author .name')
const quoteBtn = document.querySelector('button')
soundBtn = document.querySelector('.sound')
copyBtn = document.querySelector('.copy')
twitterBtn = document.querySelector('.twitter')


function randomQuote(){
    quoteBtn.classList.add("loading...")
    quoteBtn.innerText = "Loading Quote..."
// fetching random quotes/data from the API and parsing it into it into JS object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>{
    console.log(result)

    quoteText.innerText = result.content;
    authorName.innerText = result.author
    quoteBtn.innerText = "New Quote"


    })
}

soundBtn.addEventListener('click', ()=>{
//SpeechSynthesisUtterance is a web speech API that represents a speech request
    let utterance = new SpeechSynthesisUtterance('${quoteText.innerText} by ${authorName.innerText}');
    speechSynthesis.speak(utterance);
    // speak method speaks the utterance
})

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener('click',()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank"); 
    // openin a twitter tab with passing quote in the url
})

quoteBtn.addEventListener('click',randomQuote);


// SESİ YAPAMADIM YENİDEN DENE 