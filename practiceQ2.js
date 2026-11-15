/*Q2. With AI: Use ChatGPT or Claude to generate a JavaScript program that finds the largest number in an array. 
Run the code and verify the output using [12, 5, 25, 8].*/

class NumberFinder {

    constructor(numbers) {
        this.numbers = numbers;
    }

    findLargest() {
        let largest = this.numbers[0];

        for (let i = 1; i < this.numbers.length; i++) {
            if (this.numbers[i] > largest) {
                largest = this.numbers[i];
            }
        }

        console.log("The given array is:", this.numbers);
        console.log("The largest number is:", largest);
    }
}

// Create an object
let obj = new NumberFinder([12, 5, 25, 8]);

// Call the method
obj.findLargest();
