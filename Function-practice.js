//Qs: create a function using the "function" keyword that takes a String as an argument & return the number of vowels in the String.

/*function countVowels(str) {
    let count = 0;

    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("acbonde")); */


//Create an arrow function to preform the saame task.

const countVowels = (str) => {
    let count = 0;

    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    return count;
};

console.log(countVowels("acbonde"));