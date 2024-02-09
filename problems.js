// 1. Multiply
function multiply(a, b) {
    return a * b
}

// 2. Get Planet Name By ID
function getPlanetName(id) {
    var name;
    switch (id) {
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
    }

    return name;
}

// 3. Reversed Srting
function solution(str) {
    let newstr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newstr += str[i]
    }
    return newstr

    //return str.split('').reverse().join("")

}

// 4. Odd or Even
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

// 5. Counting sheep
function countSheeps(sheep) {
    var count = 0
    for (item of sheep) {
        if (item) count++
    }
    return count
}

// 6. Vowel Count
function getCount(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
            count++
    }
    return count
}

// 7. Jenny's secret message
function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}

// 8. Is n divisible by x and y?
function isDivisible(n, x, y) {
    if (x > 0 && y > 0 && n > 0) {
        return (n % x == 0) && (n % y == 0)
    }
    return false
}

// 9. Return Negative
function makeNegative(num) {
    return num > 0 ? num * (-1) : num
}

// 10. Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let small = args[0]
        for (let i = 1; i < args.length; i++)
            if (args[i] < small) small = args[i]
        return small
    }
}

// 11. Grasshopper - Summation
var summation = function (num) {
    return num * (num + 1) / 2
}

// 12. Get the mean of an array
function getAverage(marks) {
    let avg = 0;
    for (item of marks)
        avg += item
    return Math.floor(avg / marks.length)
}

// 13. Rock Paper Scissors!
const rps = (p1, p2) => {
    if (p1 == 'rock') {
        if (p2 == 'rock')
            return 'Draw!'
        if (p2 == 'paper')
            return 'Player 2 won!'
        if (p2 == 'scissors')
            return 'Player 1 won!'
    }

    if (p1 == 'paper') {
        if (p2 == 'rock')
            return 'Player 1 won!'
        if (p2 == 'paper')
            return 'Draw!'
        if (p2 == 'scissors')
            return 'Player 2 won!'
    }

    if (p1 == 'scissors') {
        if (p2 == 'rock')
            return 'Player 2 won!'
        if (p2 == 'paper')
            return 'Player 1 won!'
        if (p2 == 'scissors')
            return 'Draw!'
    }
};

// 14. Remove First and Last Character
function removeChar(str) {
    return str.substr(1, str.length - 2)
};

// 15. Sum of positive
function positiveSum(arr) {
    let sum = 0
    for (let item of arr) {
        if (item > 0) sum += item
    }
    return sum
}

// 16. Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);
}

// 17. String repeat
function repeatStr(n, s) {
    let str = ""
    for (let i = 0; i < n; i++)
        str += s
    return str;
}

// 18. Convert a string to an array
function stringToArray(string) {
    return string.split(' ')
}

// 19. Remove String Spaces
function noSpace(x) {
    let arr = x.split(" ")
    let s = ''

    for (let item of arr) {
        s += item.trim()
    }
    return s
}

// 20. Beginner - Lost Without a Map
function maps(x) {
    const result = x.map((item) => {
        return item * 2
    })

    return result
}

// 21. Is he gonna survive?
function hero(bullets, dragons) {
    return bullets / dragons >= 2 ? true : false
}

// 22. Array plus array
function arrayPlusArray(arr1, arr2) {
    let result = 0

    for (let i = 0; i < arr1.length; i++) {
        result += arr1[i] + arr2[i]
    }
    return result
}

// 23. Century From Year
function century(year) {
    return Math.ceil(year / 100)
}

// 24. Cat years, Dog years
var humanYearsCatYearsDogYears = function (humanYears) {
    let catsAge;
    let dogsAge;

    if (humanYears === 1) {
        return [humanYears, 15, 15];
    }
    if (humanYears === 2) {
        return [humanYears, 24, 24];
    }
    const excessYears = humanYears - 2;
    const extraCatYears = excessYears * 4;
    const extraDogYears = excessYears * 5;

    return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
}

// 25. Total amount of points
function points(games) {
    let totalPoints = 0;

    for (let i = 0; i < games.length; i++) {

        const value = games[i];

        const parts = value.split(":");

        const x = parts[0];
        const y = parts[1];

        if (x > y) {
            totalPoints = totalPoints + 3;
        } else if (x === y) {
            totalPoints += 1;
        }
    }
    return totalPoints;
}