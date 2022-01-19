const status = 700;

switch (status) {
    case 200:
        console.log("OK");
        break;
    case 500:
    case 400:
        console.log("Error");
            break;
    default:
        console.log("Unknow status");
}