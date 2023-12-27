
let bthDone = document.querySelector('.done');
let btnClean = document.querySelector('.clean');


bthDone.addEventListener('click', funcRes);
btnClean.addEventListener('click', cleanChislo);

function chisloToText(num){
	let answer = '';
   let answer1 = '';
   let obj1 = {
      1: 'один',               
      2: 'два',              
      3: 'три',                
      4: 'черыре',            
      5: 'пять',             
      6: 'шесть',             
      7: 'семь',           
      8: 'восемь',             
      9: 'девять'           
   }           
     
   let obj2 = {
      10: 'десять',
      11: 'одиннадцать',                     
      12: 'двенадцать',                   
      13: 'тринадцать',                   
      14: 'четырнадцать',                   
      15: 'пятнадцать',               
      16: 'шестнадцать',              
      17: 'семнадцать',
      18: 'восемнадцать',
      19: 'девятнадцать'
   };

   let obj3 = {
      20: 'двадцать',                       
      30: 'тридцать',                    
      40: 'сорок',                         
      50: 'пятьдесят',             
      60: 'шестьдесят',           
      70: 'семьдесят',    
      80: 'восемьдесят',    
      90: 'девяносто'  
   };

   let obj4 = {
      100: 'сто',
      200: 'двести',    
      300: 'триста',   
      400: 'четыреста',    
      500: 'пятьсот',    
      600: 'шестьсот',    
      700: 'семьсот',     
      800: 'восемьсот',
      900: 'девятьсот'    
   };

   let obj5 = {
      1000: 'одна',               
      2000: 'две',              
      3000: 'три',                
      4000: 'черыре',
      5000: 'пять',             
      6000: 'шесть',             
      7000: 'семь',           
      8000: 'восемь',             
      9000: 'девять'            
   };

	let arr = String(num).split('');

	/*написание слова тысяча*/
	function strThousand(arr) {
		let str = '';
		if (arr[0] == 1) {
			str = 'тысяча'
		}  else if (arr[0] > 1 && arr[0] < 5) {
			str = 'тысячи'
		} else {
			str = 'тысяч'
		}
		return str;
	}
 /*написание десятков тысяч */
		function strTenThousand(arr) {
		let str = '';
		if (arr[0] == 1) {
			str = 'тысяч'
		}  else if (arr[0] > 1 && arr[1] == 1) {
			str = 'тысяча'
		} else if (arr[0] > 1 && (arr[1] > 1 && arr[1] < 5)) {
			str = 'тысячи'
		} else {
			str = 'тысяч'
		}
		return str;
	}

	/*написание сотен тысяч */
		function strHundretThousand(arr) {
		let str = '';
		if (arr[1] == 1) {
			str = 'тысяч';
		}  else if ((arr[1] == 0 || arr[1] > 1) && arr[2] == 1) {
			str = 'одна тысяча';
		} else if ((arr[1] == 0 || arr[1] > 1) && arr[2] == 2 ) {
			str = 'две тысячи';
		} else if ((arr[1] == 0 || arr[1] > 1) && (arr[2] == 3 || arr[2] == 4)){
			str = 'тысячи';
		} else {
			str = 'тысяч';
		}
		return str;
	}

	/*написание слова миллион*/
	function strMillion(arr) {
		let str = '';
		if (arr[0] == 1) {
			str = 'миллион'
		}  else if (arr[0] > 1 && arr[0] < 5) {
			str = 'миллиона'
		} else {
			str = 'миллионов'
		}
		return str;
	}

	/*написание десятков миллионов*/
	function strTenMillion(arr) {
		let str = '';
		if (arr[0] != 1 && arr[1] == 1) {
			str = 'миллион'
		}  else if (arr[0] != 1 && arr[1] > 1 && arr[1] < 5) {
			str = 'миллиона'
		} else {
			str = 'миллионов'
		}
		return str;
	}

	/*написание сотен миллионов*/
	function strHundretMillion(arr) {
		let str = '';
		if (arr[1] != 1 && arr[2] == 1) {
			str = 'миллион'
		}  else if (arr[1] != 1 && (arr[2] > 1 && arr[2] < 5)) {
			str = 'миллиона'
		} else {
			str = 'миллионов'
		}
		return str;
	}

	/*Цифры*/
	if (arr.length == 1) {
		answer = obj1[num];
	}
	
	/*Двухзначное число (десятки) */
	if (arr.length == 2) {
		if(arr[0] == 1){
			answer = obj2[num];
		} else if (arr[0] > 1 && arr[1] == 0){
			answer = obj3[num];
		} else {
			answer = obj3[arr[0] + '0'] + ' ' + obj1[arr[1]];
		}
	}

	/*Трехзначное число (сотни)*/
if (arr.length == 3) {
	let vremHundret = obj4[arr[0] + '00'] + ' ';
	if (arr[1] == 0 && arr[2] == 0) {
		answer = obj4[num];
	} else if (arr[1] == 0 && arr[2] > 0) {
		answer = vremHundret + obj1[arr[2]];
	} else if (arr[1] == 1) {
		answer =  vremHundret + obj2[num.slice(1)];
	} else if (arr[1] > 1 && arr[2] == 0) {
		answer =  vremHundret + obj3[num.slice(1)];
	} else if (arr[1] > 1 && arr[2] > 0) {
		answer =  vremHundret + obj3[arr[1] + '0'] + ' ' + obj1[arr[2]];
	}
}

/*Четырехзначное число (тысячи)*/

if (arr.length == 4) {
	let vremThousandDigital = obj5[arr[0] + '000'] + ' ' + strThousand(arr) + ' ';
	if (num.slice(1) == '000') {
		answer = obj5[num] + ' ' + strThousand(arr);
	} else if (arr[1] == 0 && arr[2] == 0 && arr[3] > 0) {
		answer = vremThousandDigital + obj1[arr[3]];
		
	} else if (arr[1] == 0 && arr[2] == 1) {
		answer = vremThousandDigital + obj2[num.slice(2)];
	} else if (arr[1] == 0 && arr[2] > 1 && arr[3] == 0) {
		answer = vremThousandDigital + obj3[num.slice(2)];
	} else if (arr[1] == 0 && arr[2] > 1 && arr[3] > 0) {
		answer = vremThousandDigital + obj3[arr[2] + '0'] + ' ' + obj1[arr[3]];
	} else if (arr[1] > 0 && num.slice(2) == '00') {
		answer = vremThousandDigital + ' ' + obj4[arr[1] + '00'];
	} else if (arr[1] > 0 && arr[2] == 0 && arr[3] > 0) {
		answer = vremThousandDigital + obj4[arr[1] + '00'] + ' ' + obj1[arr[3]];
	} else if (arr[1] > 0 && arr[2] == 1 && arr[3] > 0){
		answer = vremThousandDigital + obj4[arr[1] + '00'] + ' ' + obj2[num.slice(2)];
	} else if (arr[1] > 0 && arr[2] > 1 && arr[3] == 0) {
		answer = vremThousandDigital + obj4[arr[1] + '00'] + ' ' + obj3[num.slice(2)];
	} else if (arr[1] > 0 && arr[2] > 1 && arr[3] > 0) {
		answer = vremThousandDigital + obj4[arr[1] + '00'] + ' ' + obj3[arr[2] + '0'] + ' ' + obj1[arr[3]];
	}
}

/*Пятизначное число (десятки тысяч)*/
	if (arr.length == 5) {
		let vremThousand;
		if ( arr[0] == 1) {
			vremThousand =  obj2[num.slice(0, 2)] + ' ' + strTenThousand(arr);
		} else if (arr[0] > 1 && arr[1] == 0) {
			vremThousand = obj3[num.slice(0, 2)] + ' ' + strTenThousand(arr);
		} else {
			vremThousand = obj3[arr[0] + '0'] + ' ' + obj1[arr[1]] + ' ' + strTenThousand(arr);
		}
	
		if (num.slice(2) == '000') {
			answer = vremThousand;
		} else if (num.slice(2, 4) == '00' && arr[4] > 0) {
			answer = vremThousand + ' ' + obj1[arr[4]];
		} else if (arr[2] == 0 && arr[3] == 1) {
			answer = vremThousand + ' ' + obj2[num.slice(3)];
		} else if (arr[2] == 0 && arr[3] > 1 && arr[4] == 0) {
			answer = vremThousand + ' ' + obj3[num.slice(3)];
		} else if (arr[2] == 0 && arr[3] > 1 && arr[4] > 0) {
			answer = vremThousand + ' ' + obj3[arr[3] + '0'] + ' ' + obj1[arr[4]];
		} else if (arr[2] > 0 && arr[3] == 0 && arr[4] > 0) {
			answer = vremThousand + ' ' + obj4[arr[2] + '00'] + ' ' + obj1[arr[4]];
		} else if (arr[2] > 0 && arr[3] == 1){
			answer = vremThousand + ' ' + obj4[arr[2] + '00'] + ' ' + obj2[num.slice(3)];
		} else if (arr[2] > 0 && arr[3] > 1 && arr[4] == 0) {
			answer = vremThousand + ' ' + obj4[arr[2] + '00'] + ' ' + obj3[num.slice(3)];
		} else if (arr[2] > 0 && arr[3] > 1 && arr[4] > 0) {
			answer = vremThousand + ' ' + obj4[arr[2] + '00'] + ' ' + obj3[arr[3] + '0'] + ' ' + obj1[arr[4]];
		}
	}
	
	/*Шестизначное число (сотни тысяч)*/
		let vremHundretThousand;
		function HundretThousand(vremArr) {
			if (vremArr[0] == 0 ) {
				if (vremArr[1] == 0 && vremArr[2] > 0) {
					vremHundretThousand = obj1[vremArr[2]] + ' ' + strHundretThousand(vremArr);
				} else if (vremArr[1] == 1) {
					vremHundretThousand = obj2[vremArr[1] + vremArr[2]] + ' ' + strHundretThousand(vremArr);
				} else if (vremArr[1] > 1 && vremArr[2] == 0) {
					vremHundretThousand = obj3[vremArr[1] + vremArr[2]] + ' ' + strHundretThousand(vremArr);
				} else if (vremArr[1] > 1 && vremArr[2] > 0) {
					vremHundretThousand = obj3[vremArr[1] + '0'] + ' ' + obj1[vremArr[2]] + ' ' + strHundretThousand(vremArr);
				}
			} else if (vremArr[0] > 0) {
				if (vremArr[1] == 0 && (vremArr[2] >= 0 && vremArr[2] < 3)) {
					vremHundretThousand = obj4[vremArr[0] + '00'] + ' ' + strHundretThousand(vremArr);
				} else if (vremArr[1] == 0 && vremArr[2] > 2) {
					vremHundretThousand = obj4[vremArr[0] + '00'] + ' '  + obj1[vremArr[2]] + ' ' + strHundretThousand(vremArr);
				} else if (vremArr[1] == 1) {
					vremHundretThousand = obj4[vremArr[0] + '00'] + ' ' + obj2[vremArr[1] + vremArr[2]] + ' ' + strHundretThousand(vremArr);
				} else if (vremArr[1] > 1 && vremArr[2] == 0) {
					vremHundretThousand = obj4[vremArr[0] + '00'] + ' ' + obj3[vremArr[1] + '0'] + ' ' + strHundretThousand(vremArr);
				} else if (vremArr[1] > 1 && (vremArr[2] > 0 && vremArr[2] <= 2)) {
					vremHundretThousand = obj4[vremArr[0] + '00']  + ' ' + obj3[vremArr[1] + '0'] + ' ' + strHundretThousand(vremArr);
				} 	else if (vremArr[1] > 1 && vremArr[2] > 2) {
					vremHundretThousand = obj4[vremArr[0] + '00']  + ' ' + obj3[vremArr[1] + '0'] + ' ' + obj1[vremArr[2]] + ' ' + strHundretThousand(vremArr);
				}
				
			}
		
				return vremHundretThousand;
		}
	
	if (arr.length == 6) {

		HundretThousand(arr);

		if (arr[3] == 0) {
			if(arr[4] == 0 && arr[5] == 0){
				answer = vremHundretThousand;
			} else if (arr[4] == 0 && arr[5] > 0) {
				answer = vremHundretThousand + ' ' + obj1[arr[5]];
			} else if (arr[4] == 1) {
				answer = vremHundretThousand + ' ' + obj2[num.slice(4)];
			} else if (arr[4] > 1 && arr[5] == 0) {
				answer = vremHundretThousand + ' ' + obj3[arr[4] + '0'];
			} else if (arr[4] > 1 && arr[5] > 0){
				answer = vremHundretThousand + ' ' + obj3[arr[4] + '0'] + ' ' + obj1[arr[5]];
			}
		} else {
			if (arr[4] == 0 && arr[5] > 0){
				answer = vremHundretThousand + ' ' + obj4[arr[3] + '00'] + ' ' + obj1[arr[5]];
			} else if (arr[4] == 1) {
				answer = vremHundretThousand + ' ' + obj4[arr[3] + '00'] + ' ' + obj2[num.slice(4)];
			} else if (arr[4] > 1 && arr[5] == 0) {
				answer = vremHundretThousand + ' ' + obj3[num.slice(3)];
			} else if (arr[4] > 1 && arr[5] > 0) {
				answer = vremHundretThousand + ' ' + obj4[arr[3] + '00'] + ' ' + obj3[arr[4] + '0'] + ' ' + obj1[arr[5]];
			}
		}
	}
	

	/*Семизначное число (миллионы)*/
	let arrMilloon; 

	if (arr.length == 7) {

		arrMilloon = String(num).slice(1).split('');
		
		HundretThousand(arrMilloon);

		if (num.slice(1) == '000000') {
			answer = obj1[arr[0]] + ' ' + strMillion(arr);
		} else {
			if (arr[4] == 0) {
			if(arr[5] == 0 && arr[6] == 0){
				answer = obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand;
			} else if (arr[5] == 0 && arr[6] > 0) {
				answer = obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand + ' ' + obj1[arr[6]];
			} else if (arr[5] == 1) {
				answer = obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand + ' ' + obj2[num.slice(5)];
			} else if (arr[5] > 1 && arr[6] == 0) {
				answer = obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand + ' ' + obj3[arr[5] + '0'];
			} else if (arr[5] > 1 && arr[6] > 0){
				answer =  obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand + ' ' + obj3[arr[5] + '0'] + ' ' + obj1[arr[6]];
			}
		} else {
			if (arr[5] == 0 && arr[6] == 0) {
				answer = obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand + ' ' + obj4[arr[4] + '00'];
			} else if (arr[5] == 0 && arr[6] > 0){
				answer = obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand + ' ' + obj4[arr[4] + '00'] + ' ' + obj1[arr[6]];
			} else if (arr[5] == 1) {
				answer = obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand + ' ' + obj4[arr[4] + '00'] + ' ' + obj2[num.slice(5)];
			} else if (arr[5] > 1 && arr[6] == 0) {
				answer = obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand + ' ' + obj4[arr[4] + '00'] + ' ' + obj3[arr[5] + '0'];
			} else if (arr[5] > 1 && arr[6] > 0) {
				answer = obj1[arr[0]] + ' ' + strMillion(arr) + ' ' + vremHundretThousand + ' ' + obj4[arr[4] + '00'] + ' ' + obj3[arr[5] + '0'] + ' ' + obj1[arr[6]];
			}
		}
		}
		
	}


	/*Восьмизначное число (десятки миллионов) */
	if (arr.length == 8) {
		let vremMillion;
		function tenMillion(){
			if(arr[0] == 1){
				vremMillion = obj2[arr[0] + arr[1]] + ' ' + strTenMillion(arr);
			} else if (arr[0] > 1){
				if(arr[1] == 0) {
					vremMillion = obj3[arr[0] + arr[1]] + ' ' + strTenMillion(arr);
				} else if (arr[1] > 0) {
					vremMillion = obj3[arr[0] + '0'] + ' ' + obj1[arr[1]] + ' ' + strTenMillion(arr);
				}
			}
			return vremMillion
		}
		tenMillion();

		arrMilloon = String(num).slice(2).split('');
		HundretThousand(arrMilloon);

		if (num.slice(2) == '000000') {
			answer = vremMillion;
		} else {
			if (arr[5] == 0) {
			if(arr[6] == 0 && arr[7] == 0){
				answer = vremMillion + ' ' + vremHundretThousand;
			} else if (arr[6] == 0 && arr[7] > 0) {
				answer = vremMillion + ' ' + vremHundretThousand + ' ' + obj1[arr[7]];
			} else if (arr[6] == 1) {
				answer = vremMillion + ' ' + vremHundretThousand + ' ' + obj2[num.slice(6)];
			} else if (arr[6] > 1 && arr[7] == 0) {
				answer = vremMillion + ' ' + vremHundretThousand + ' ' + obj3[arr[6] + '0'];
			} else if (arr[6] > 1 && arr[7] > 0){
				answer =  vremMillion + ' ' + vremHundretThousand + ' ' + obj3[arr[6] + '0'] + ' ' + obj1[arr[7]];
			}
		} else {
			if(arr[6] == 0 && arr[7] == 0){
				answer = vremMillion + ' ' + vremHundretThousand + ' ' + obj4[arr[5] + '00'];
			} else if (arr[6] == 0 && arr[7] > 0){
				answer = vremMillion + ' ' + vremHundretThousand + ' ' + obj4[arr[5] + '00'] + ' ' + obj1[arr[7]];
			} else if (arr[6] == 1) {
				answer = vremMillion + ' ' + vremHundretThousand + ' ' + obj4[arr[5] + '00'] + ' ' + obj2[num.slice(6)];
			} else if (arr[6] > 1 && arr[7] == 0) {
				answer = vremMillion + ' ' + vremHundretThousand + ' ' + obj4[arr[5] + '00'] + ' ' + obj3[arr[6] + '0'];
			} else if (arr[6] > 1 && arr[7] > 0) {
				answer = vremMillion + ' ' + vremHundretThousand + ' ' + obj4[arr[5] + '00'] + ' ' + obj3[arr[6] + '0'] + ' ' + obj1[arr[7]];
			}
		}
		}

	}

	/*Девятизначное число (сотни миллионов) */
	if (arr.length == 9) {
		let vremHundretMillion;
		function hundretMillion(){
			if(arr[1] == 0 && arr[2] == 0){
				vremHundretMillion = obj4[arr[0] + '00'] + ' ' + strHundretMillion(arr);
			} else if (arr[1] == 0 && arr[2] > 0){
				vremHundretMillion = obj4[arr[0] + '00'] + ' ' + obj1[arr[2]] + ' ' + strHundretMillion(arr);
			} else if (arr[1] == 1) {
				vremHundretMillion = obj4[arr[0] + '00'] + ' ' + obj2[arr[1] + arr[2]] + ' ' + strHundretMillion(arr);
			} else if (arr[1] > 1 && arr[2] == 0) {
				vremHundretMillion = obj4[arr[0] + '00'] + ' ' + obj3[arr[1] + arr[2]] + ' ' + strHundretMillion(arr);
			} else if (arr[1] > 1 && arr[2] > 0) {
				vremHundretMillion = obj4[arr[0] + '00'] + ' ' + obj3[arr[1] + '0'] + ' ' + obj1[arr[2]] + ' ' + strHundretMillion(arr);
			}
			return vremHundretMillion
		}
		hundretMillion();

		arrMilloon = String(num).slice(3).split('');
		HundretThousand(arrMilloon);

		if (num.slice(3) == '000000') {
			answer = vremHundretMillion;
		} else {
			if (arr[6] == 0) {
			if(arr[7] == 0 && arr[8] == 0){
				answer = vremHundretMillion + ' ' + vremHundretThousand;
			} else if (arr[7] == 0 && arr[8] > 0) {
				answer = vremHundretMillion + ' ' + vremHundretThousand + ' ' + obj1[arr[8]];
			} else if (arr[7] == 1) {
				answer = vremHundretMillion + ' ' + vremHundretThousand + ' ' + obj2[num.slice(7)];
			} else if (arr[7] > 1 && arr[8] == 0) {
				answer = vremHundretMillion + ' ' + vremHundretThousand + ' ' + obj3[arr[7] + '0'];
			} else if (arr[7] > 1 && arr[8] > 0){
				answer =  vremHundretMillion + ' ' + vremHundretThousand + ' ' + obj3[arr[7] + '0'] + ' ' + obj1[arr[8]];
			}
		} else {
			if(arr[7] == 0 && arr[8] == 0){
				answer = vremHundretMillion + ' ' + vremHundretThousand + ' ' + obj4[arr[6] + '00'];
			} else if (arr[7] == 0 && arr[8] > 0){
				answer = vremHundretMillion + ' ' + vremHundretThousand + ' ' + obj4[arr[6] + '00'] + ' ' + obj1[arr[8]];
			} else if (arr[7] == 1) {
				answer = vremHundretMillion + ' ' + vremHundretThousand + ' ' + obj4[arr[6] + '00'] + ' ' + obj2[num.slice(7)];
			} else if (arr[7] > 1 && arr[8] == 0) {
				answer = vremHundretMillion + ' ' + vremHundretThousand + ' ' +obj4[arr[6] + '00'] + ' ' + obj3[arr[7] + '0'];
			} else if (arr[7] > 1 && arr[8] > 0) {
				answer = vremHundretMillion + ' ' + vremHundretThousand + ' ' + obj4[arr[6] + '00'] + ' ' + obj3[arr[7] + '0'] + ' ' + obj1[arr[8]];
			}
		}
		}

	}

	answer1 = answer[0].toUpperCase() + answer.slice(1);
	return [answer1, answer];
}



function funcRes(){
	let chislo = document.querySelector('#chislo');
	let textOsn = document.querySelector('#textosn');
	let textDop = document.querySelector('#textdop');
	if(chislo.value == ''){
      alert('Вы забыли ввести число!!!');
   } else if (isNaN(Number(chislo.value, 10))) {
		chislo.value = '';
		alert('Введите число!');
	} else {
		if (String(chislo.value).length > 9 ){
			chislo.value = '';
      	alert('Введите число меньше миллиарда!');
		} else {
			let result = chisloToText(chislo.value);
			textOsn.value = result[0];
			textDop.value = result[1];
		}
   }
   }


function cleanChislo(){
	let chislo = document.querySelector('#chislo');
	let textOsn = document.querySelector('#textosn');
	let textDop = document.querySelector('#textdop');
	chislo.value = '';
	textOsn.value = '';
	textDop.value = '';
	chislo.focus();
}