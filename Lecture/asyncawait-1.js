function promiseTimout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log('start');
    await promiseTimout(2000);
    console.log('stop');
}
console.log('Before run');
run();
console.log('After run');