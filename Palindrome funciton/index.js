function isPalindrome(str) {
    const val = str.toString();
    for (let i = 0; i < val.length / 2; i++) {
        if (val[i] !== val[val.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(12621));