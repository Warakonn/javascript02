function promiseTimout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunnningoperation() {
    return 42;
}

async function run() {
    console.log('start');
    await promiseTimout(2000);

    const response = await longRunnningoperation();
    console.log(response);
    console.log('stop');
}
run();