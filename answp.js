var num1 = parseInt(prompt("숫자를 입력하세요"));
var num2 = parseInt(prompt("숫자를 입력하세요"));

var min_num;
var max_num;
var count = 0;

if(num1 > num2){
  min_num = num2;
  max_num = num1;
}else{
  min_num = num1;
  max_num = num2;
}


for (var i=min_num; i<= max_num; i++){
    for(var j=2; j< i; j++){
      if(i % j == 0) {
        break;
      } 
    }
    if(i == j){console.log(i); count++;}
  }
  console.log('소수의 갯수 : ' + count +'개');
