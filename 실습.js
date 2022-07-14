var num1, num2, min, max, i, j;

num1 = parseInt(prompt("첫번째 숫자 입력"));
num2 = parseInt(prompt("두번째 숫자 입력"));

if(num1 < num2){
  min = num1;
  max = num2;
}else{
  min = num2;
  max = num1;
}

document.write("<table boreder='1' align='center'>");
document.write("<tr align='center'>");

