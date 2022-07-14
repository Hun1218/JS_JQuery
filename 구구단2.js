function input_number() {
			var num1, num2; //지역변수 - 함수안에서만 사용가능 휘발성
			num1 = parseInt(prompt("첫번째 숫자 입력"));
			num2 = parseInt(prompt("두번째 숫자 입력"));
			return {num_1: num1, num_2: num2}; // 리턴은 하나의 값만 할 수 있기 때문에 객체 키:값 으로 
}			// 객체의 주소를 반환

function number_compare(num1, num2) { //지역변수
			var min, max;
			if (num1 < num2)
			{
				min = num1;
				max = num2;
			}
			else
			{
				min = num2;
				max = num1;
			}
			return {min_num: min, max_num: max}; //객체의 주소를 반환
}

function gugudan_proc(min, max) {
				var i, j;

				document.write("<table border='1' align='center'>");
				document.write("<tr align='center'>");
				for (i=min; i<=max; i++)
				{
					document.write("<th>" + i + "단" + "</th>");
				}
				document.write("</tr>");
				
				for (j=1; j<=9; j++)
				{
					document.write("<tr align='center'>");
				for (i=min; i<=max; i++)
					{
						document.write("<td>" + i + "*" + j + "=" + (i*j) + "</td>");	
					}
					document.write("</tr>")	;
				}
					
				document.write("</table>");
}

function gugudan() {
			// var num1, num2, min, max;

			var num = input_number();  // 두번째 호출 // 입력받은값을 호출 전달받은수가없음

			// num1 = num.num_1;
			// num2 = num.num_2;

			var min_max = number_compare(num.num_1, num.num_2);
			// min = min_max.min_num;
			// max = min_max.max_num;

			gugudan_proc(min_max.min_num, min_max.max_num);
		
			
}


gugudan(); // 여기서부터 호출시작

