function creatQuote(quote, callback) {
    let myQuote = "Like I always say, " + quote;
    callback(myQuote);
}

function logQuote(quote) {
    console.log(quote + 'Yes.....');
}

creatQuote("You will getting better!", logQuote);