class Dog {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log("This is " + this._name + "!");

    }

    static bark() {
        console.log("woof!!");
    }
}