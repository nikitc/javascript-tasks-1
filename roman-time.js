var hours = process.argv[2];
var minutes = process.argv[3];

if (hours > 23 || minutes > 59) {
	process.stdout.write('Время указано неверно.');
}
else {
	var result = convertToRoman(hours) + ':' + convertToRoman(minutes);
	process.stdout.write(result + '\n');
	PrintASCII(result);
}

function convertToRoman(value){
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

	var arrayNumbers = Object.keys(romanNumerals).reverse();
	var result = '';
	var numberCount = 0;

	while (value > 0) {
		if (value >= arrayNumbers[numberCount]) {
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

function PrintASCII(result) {
	var dict_ASCII = {
					I : 
					[	' (_)(_)(_) ',
						'    (_)    ',
						'    (_)    ',
						'    (_)    ',
						'    (_)    ',
						'    (_)    ',
						' (_)(_)(_) '
					]
						,

					V : 
					[	' (_)           (_) ',
						'  (_)         (_)  ',
						'   (_)       (_)   ',
						'    (_)     (_)    ',
						'     (_)   (_)     ',
						'      (_)_(_)      ',
						'        (_)        '
					]
						,

					X : 
					[	' (_)         (_) ',
						'   (_)     (_)   ',
						'     (_) (_)     ',
						'       (_)       ',
						'     (_) (_)     ',
						'   (_)     (_)   ',
						' (_)         (_) '
					]
						,

					L :
					[	' (_)             ',
						' (_)             ',
						' (_)             ',
						' (_)             ',
						' (_)             ',
						' (_)             ',
						' (_)(_)(_)(_)(_) '
					]
						,

					':' : 
					[	'        ',
						'  _  _  ',
						' (_)(_) ',
						' (_)(_) ',
						'  -  -  ',
						' (_)(_) ',
						' (_)(_) '
					]
						,

					'-' :
					[	'        ',
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
		process.stdout.write(str + '\n');
	}

}