const name = ["justin", "Sarah", "Chris"];

console.log("while");
let index = 0;
while (index < name.length) {
    const names = name[index];
    console.log(names);
    index++;
}

console.log("for");
for (let index = 0; index < name.length; index++) {
    const names = name[index];
    console.log(name)
}

console.log("for of");
for (let names of name) {
    console.log(names);
}