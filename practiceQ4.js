
class NumberCheck {
    constructor(number) {
        this.number = number;
    }

    checkNumber() {
        if (this.number % 2 === 0) {
            console.log(this.number, "is Even");
        } else {
            console.log(this.number, "is Odd");
        }
    }
}

let num1 = new NumberCheck(11);

num1.checkNumber();
