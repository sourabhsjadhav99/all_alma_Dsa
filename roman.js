var intToRoman = function(num) {
    const romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (const pair of romanMap) {
        while (num >= pair.value) {
            result += pair.symbol;
            num -= pair.value;
        }
    }

    return result;
  };
  // Example usage:
console.log(intToRoman(3));   // Output: "III"
console.log(intToRoman(58));  // Output: "LVIII"