let fullMessage = [];

for (let i = 1; i < 101; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        fullMessage.push("FizzBuzz");
    } else if (i % 5 === 0) {
        fullMessage.push("Buzz");
    } else if (i % 3 === 0) {
        fullMessage.push("Fizz");
    } else {
        fullMessage.push(i);
    }
}
console.log(fullMessage);