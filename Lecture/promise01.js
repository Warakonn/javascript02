function promiseTimout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

console.log('start');
promiseTimout(2000)
    .then(() => {
        console.log('Done!!!');
    })
    .catch(() => {
        console.log('Error');
    });
console.log('End');