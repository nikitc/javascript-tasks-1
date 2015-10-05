var hours = process.argv[2];
var minutes = process.argv[3];

if (hours > 23 || minutes > 59) {
    console.log('Время указано неверно.');
}
else {
    var result = convertToRoman(hours) + ':' + convertToRoman(minutes);
    console.log(result + '\n');
    printASCII(result);
}

function convertToRoman (value) {
    if (value == 0){
        return '--'
    }

    var romanNumerals = {
        50 : 'L',
        40 : 'XL',
        10 : 'X',
        9 : 'IX',
        5 : 'V',
        4 : 'IV',
        1 : 'I'
    }

    var arrayNumbers = Object.keys(romanNumerals).sort(compareNumeric);
    var result = '';
    var numberCount = 0;
    
    while (value > 0) {
        if (value >= Number(arrayNumbers[numberCount])) {
            value -= arrayNumbers[numberCount];
            result += romanNumerals[arrayNumbers[numberCount]];
        }
        else {
            if (numberCount != arrayNumbers.length) {
                numberCount++;
            }
        }
    }

    return result;
}

function compareNumeric (a, b) {
    if (Number(a) < Number(b)) {
        return 1;
    }
    if (Number(a) > Number(b)) {
        return -1;
    }
}

function printASCII (result) {
    var dict_ASCII = {
        I: [   
            ' (_)(_)(_) ',
            '    (_)    ',
            '    (_)    ',
            '    (_)    ',
            '    (_)    ',
            '    (_)    ',
            ' (_)(_)(_) '
        ],
        V: [
            ' (_)           (_) ',
            '  (_)         (_)  ',
            '   (_)       (_)   ',
            '    (_)     (_)    ',
            '     (_)   (_)     ',
            '      (_)_(_)      ',
            '        (_)        '
        ],
        X: [
            ' (_)         (_) ',
            '   (_)     (_)   ',
            '     (_) (_)     ',
            '       (_)       ',
            '     (_) (_)     ',
            '   (_)     (_)   ',
            ' (_)         (_) '
        ],
        L: [
            ' (_)             ',
            ' (_)             ',
            ' (_)             ',
            ' (_)             ',
            ' (_)             ',
            ' (_)             ',
            ' (_)(_)(_)(_)(_) '
        ],
        ':': [
            '        ',
            '  _  _  ',
            ' (_)(_) ',
            ' (_)(_) ',
            '  -  -  ',
            ' (_)(_) ',
            ' (_)(_) '
        ],
        '-' : [
            '        ',
            '        ',
            '        ',
            ' (_)(_) ',
            '        ',
            '        ',
            '        '
        ] 
        }
                    
    for (var numberStr = 0; numberStr < 7; numberStr++) {
        str = '';
        for (var index = 0; index < result.length; index++) {
            str += dict_ASCII[result[index]][numberStr];
        }
        console.log(str + '\n');
    }

}