var num1 = parseInt(prompt("숫자를 입력하세요"));
var num2 = parseInt(prompt("숫자를 입력하세요"));

var min = 0;
var max = 0;

if(num1 > num2){
    max = num1;
    min = num2;
}else{
    max = num2;
    min = num1;
}

document.write("<table border= '1' align= 'center'>");
// 테이블 줄 생성 및 정렬
document.write("<tr align = 'center'>");
// 텍스트정렬
for(var i = min; i <= max; i++){
    // document.write("<td>" + i + '단' + "</td>");
    document.write(`<th> ${i} 단 </th>`)
}
// 구구단 반복 행단 체크
document.write("</tr>");

for(var i = 1; i < 10; i++){
    document.write("<tr>");
    for(var j = min; j <= max; j++){
        // document.write("<td>" + j + '*'+i+'='+i*j+"</td>");
        document.write(`<td> ${j} * ${i} = ${i*j}</td>`)
        // 구구단 반복문 
    }
    document.write("</tr>");
}

document.write("</table>");



