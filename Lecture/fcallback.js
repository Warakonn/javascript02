function callback() {
    console.log('Timeout Completed');
}

console.log('start');
setTimeout(callback, 3000);
console.log('end');