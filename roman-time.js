var hours = process.argv[2];
var minutes = process.argv[3];


if ((hours > 23) || (minutes > 59))
	process.stdout.write('Время указано неверно.');
else {
	var result = convertToRoman(hours) + ':' + convertToRoman(minutes);
	process.stdout.write(result + '\n');
	PrintASCI(result);
}

function convertToRoman(value){
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

function PrintASCI(result) {
	var I_ASCI = [' (_)(_)(_) ',
				  '    (_)    ',
				  '    (_)    ',
				  '    (_)    ',
				  '    (_)    ',
				  '    (_)    ',
				  ' (_)(_)(_) '
				]
	var V_ASCI = [' (_)           (_) ',
				  '  (_)         (_)  ',
				  '   (_)       (_)   ',
				  '    (_)     (_)    ',
				  '     (_)   (_)     ',
				  '      (_)_(_)      ',
				  '        (_)        '

				]

	var X_ASCI = [' (_)         (_) ',
				  '   (_)     (_)   ',
				  '     (_) (_)     ',
				  '       (_)       ',
				  '     (_) (_)     ',
				  '   (_)     (_)   ',
				  ' (_)         (_) '
				  
				]

	var L_ASCI = [' (_)             ',
				  ' (_)             ',
				  ' (_)             ',
				  ' (_)             ',
				  ' (_)             ',
				  ' (_)             ',
				  ' (_)(_)(_)(_)(_) '
				  
				]
	var ASCI_2 = ['        ',
				  '  _  _  ',
				  ' (_)(_) ',
				  ' (_)(_) ',
				  '  -  -  ',
				  ' (_)(_) ',
				  ' (_)(_) '
				]

	var dict_ASCI = {'I' : I_ASCI,
					 'V' : V_ASCI,
					 'X' : X_ASCI,
					 'L' : L_ASCI,
					 ':' : ASCI_2,
						}
	for (var numberStr = 0; numberStr < 7; numberStr++)
	{
		str = '';
		for (var index = 0; index < result.length; index++)
			str += dict_ASCI[result[index]][numberStr];
		process.stdout.write(str + '\n');
	}

}