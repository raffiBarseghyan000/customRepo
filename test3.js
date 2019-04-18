let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    func1() {
        console.log("aaa")
    }
};

let admin = {
    name: "John1",
    surname: "Smith1",
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName)
