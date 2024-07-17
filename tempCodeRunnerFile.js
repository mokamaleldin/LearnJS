class User {
    constructor(id, userName, salary) {
        // Properties
        this.i = id;
        this.u = userName || 'UnKnow';
        this.s = salary;
        this.wsg = function () {
            return `Hello ${this.u}`
        }
    }
    //Methods
    writeMsg() {
        return `Hello ${this.u}`
    }
}

let user1 = new User(100, "", 5000);
let user2 = new User(101, "kamaleldin", 1000);

console.log(user1.u)//UnKnow
console.log(user2.writeMsg())