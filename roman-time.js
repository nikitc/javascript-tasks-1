var hours = process.argv[2];
var minutes = process.argv[3];


if ((hours > 23) || (minutes > 59))
	process.stdout.write('Время указано неверно.');
else {
	var result = convertToRoman(hours) + ':' + convertToRoman(minutes);
	process.stdout.write(result + '\n');
	PrintASCII(result);
}

function convertToRoman(value){
	if (value == 0)
		return '--'
	var romanNumerals = {
		50 : 'L',
		40 : 'XL',
		10 : 'X',
		9 : 'IX',
		5 : 'V',
		4 : 'IV',
		1 : 'I'
	}

	var arrayNumbers = [50, 40, 10, 9, 5, 4, 1];
	var result = '';
	var numberCount = 0;

	while (value > 0) 
	{
		if (value >= arrayNumbers[numberCount])
		{
			value -= arrayNumbers[numberCount];
			result += romanNumerals[arrayNumbers[numberCount]];
		}
		else
			if (numberCount != arrayNumbers.length)
				numberCount++;
	}

	return result;
}

function PrintASCII(result) {
	var I_ASCII = [	' (_)(_)(_) ',
					'    (_)    ',
					'    (_)    ',
					'    (_)    ',
					'    (_)    ',
					'    (_)    ',
					' (_)(_)(_) '
				]
	var V_ASCII = [	' (_)           (_) ',
					'  (_)         (_)  ',
					'   (_)       (_)   ',
					'    (_)     (_)    ',
					'     (_)   (_)     ',
					'      (_)_(_)      ',
					'        (_)        '

				]

	var X_ASCII = [	' (_)         (_) ',
					'   (_)     (_)   ',
					'     (_) (_)     ',
					'       (_)       ',
					'     (_) (_)     ',
					'   (_)     (_)   ',
					' (_)         (_) '
				  
				]

	var L_ASCII = [  ' (_)             ',
					' (_)             ',
					' (_)             ',
					' (_)             ',
					' (_)             ',
					' (_)             ',
					' (_)(_)(_)(_)(_) '
				  
				]
	var ASCII_2 = [	'        ',
					'  _  _  ',
					' (_)(_) ',
					' (_)(_) ',
					'  -  -  ',
					' (_)(_) ',
					' (_)(_) '
				]

	var ASCII_0 = [	'        ',
					'        ',
					'        ',
					' (_)(_) ',
					'        ',
					'        ',
					'        '
				]

	var dict_ASCII = {'I' : I_ASCII,
					 'V' : V_ASCII,
					 'X' : X_ASCII,
					 'L' : L_ASCII,
					 ':' : ASCII_2,
					 '-' : ASCII_0
					}

	for (var numberStr = 0; numberStr < 7; numberStr++)
	{
		str = '';
		for (var index = 0; index < result.length; index++)
			str += dict_ASCII[result[index]][numberStr];
		process.stdout.write(str + '\n');
	}

}