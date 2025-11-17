function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text){
    convertToUpperCase = text.toUpperCase();
    return convertToUpperCase;
}

function findMaximum(num1, num2){
    return (num1 > num2) ? num1 : num2;
}

function isPalindrome(word) {
    word = word.toLowerCase();                 // normalize
    let reversed = word.split('').reverse().join('');

    if (word === reversed) {
        return true;
    } else {
        return false;
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage){
    let discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };