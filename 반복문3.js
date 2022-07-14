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


// for (var i=min_num; i<= max_num; i++){
//     for(var j=2; j< i; j++){
//       if(i % j == 0) {
//         break;
//       } 
//     }
//     if(i == j){console.log(i); count++;}
//   }

// var i = min_num;
// while(i <= max_num){
//   var j = 2;
//   while(j < i){
//       if(i%j == 0) 
//       break;
//       j++;
//     }
//     if(i == j){console.log(i); count++;}
//     i++;
// }
//   console.log('소수의 갯수 : ' + count +'개');

// var i = min_num;
// while(i <= max_num){
//   for(var j = 2; j < i ; j++){
//     if (i % j == 0){
//       break;
//     }
//   }
//   if (i==j){
//     count++;
//     console.log(i);
//   }
//   i++;
// }

var i = min_num; // 초기식
do{   //바깥
  var j = 2; //안쪽 초기식
  do{
    if(i%j == 0) break;  // 안쪽 반복식
    j++;
  }while(j < i);   // 안쪽 조건식
  if(i ==j) {count++; console.log(i);}
  i++
}while(i <= max_num); //조건식
console.log('소수의 갯수 : ' + count +'개');
