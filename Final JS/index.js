// Double Array Example
const originalArray = [1, 2, 3, 4, 5];

function doubleArray(arr) {
    return arr.map(num => num * 2);
}

const doubledArray = doubleArray(originalArray);

document.getElementById('originalArray').textContent = originalArray.join(', ');
document.getElementById('doubledArray').textContent = doubledArray.join(', ');




// Number to String Array Example
const numberArray = [10, 20, 30, 40, 50];

function convertToStrings(arr) {
    return arr.map(num => num.toString());
}

const stringArray = convertToStrings(numberArray);

document.getElementById('numberArray').textContent = numberArray.join(', ');
document.getElementById('stringArray').textContent = stringArray.join(', ');





// Square Array Example
const squareOriginalArray = [2, 4, 6, 8, 10];

function squareArray(arr) {
    return arr.map(num => num * num);
}

const squaredArray = squareArray(squareOriginalArray);

document.getElementById('squareOriginalArray').textContent = squareOriginalArray.join(', ');
document.getElementById('squaredArray').textContent = squaredArray.join(', ');




// Sum of Positive Numbers Example
const sumOriginalArray = [-1, 2, -3, 4, 5, -6];

function sumOfPositives(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

const positiveSum = sumOfPositives(sumOriginalArray);

document.getElementById('sumOriginalArray').textContent = sumOriginalArray.join(', ');
document.getElementById('positiveSum').textContent = positiveSum;



// Mean and Median Example
const meanMedianOriginalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const calculateMean = arr => {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
};

const calculateMedian = arr => {
    if (arr.length === 0) return 0;
    const sortedArr = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    } else {
        return sortedArr[mid];
    }
};

const meanValue = calculateMean(meanMedianOriginalArray);
const medianValue = calculateMedian(meanMedianOriginalArray);

document.getElementById('meanMedianOriginalArray').textContent = meanMedianOriginalArray.join(', ');
document.getElementById('meanValue').textContent = meanValue;
document.getElementById('medianValue').textContent = medianValue;




// Abbreviate Name Example
const originalName = "Shahzeb Khan Jadoon";

function abbreviateName(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}

const abbreviatedName = abbreviateName(originalName);

document.getElementById('originalName').textContent = originalName;
document.getElementById('abbreviatedName').textContent = abbreviatedName;




// Age Difference Example
const familyAges = [12, 45, 78, 23, 56, 89, 5];

function findAgeDifference(arr) {
    if (arr.length === 0) return { oldest: 0, youngest: 0, difference: 0 };
    const oldest = Math.max(...arr);
    const youngest = Math.min(...arr);
    return {
        oldest: oldest,
        youngest: youngest,
        difference: oldest - youngest
    };
}

const ageDifferenceResult = findAgeDifference(familyAges);

document.getElementById('familyAges').textContent = familyAges.join(', ');
document.getElementById('oldestAge').textContent = ageDifferenceResult.oldest;
document.getElementById('youngestAge').textContent = ageDifferenceResult.youngest;
document.getElementById('ageDifference').textContent = ageDifferenceResult.difference;