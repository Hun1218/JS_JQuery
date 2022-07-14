var input_data = function () {
  var num1, num2;
  var num1 = parseInt(prompt("숫자를 입력하세요"));
  var num2 = parseInt(prompt("숫자를 입력하세요"));
  return {num_01: num1, num_02:num2};
};

// function minmax_proc(num1, num2) {
//   var min, max;
//   if(num1 > num2){
//     min = num2;
//     max = num1;
//   }else{
//     min = num1;
//     max = num2;
//   }
//   return {min_num: min, max_num: max};
// }

var minmax_proc = function (num1, num2)  {
 var min, max;
 if(num1 > num2){
   min = num2;
  max = num1;
 }else{
   min = num1;
  max = num2;
  }
   return {min_num: min, max_num: max};
  };

const prime_number =(min_num, max_num) =>{
  var i, j, count=0;
  for (var i=min_num; i<= max_num; i++){
  for(var j=2; j< i; j++){
    if(i % j == 0) {
      break;
    } 
  }
  if(i == j){console.log(i); count++;}
  }
  return count;
};

function total_count(number){
    console.log(`소수의 몇개:${number}`);
}

function prime(){
  var num = input_data();
  var minmax = minmax_proc(num.num_01, num.num_02);
  var number = prime_number(minmax.min_num, minmax.max_num);
  total_count(number);
}

prime();



var min_num, max_num, count = 0;
// var num1 = parseInt(prompt("숫자를 입력하세요"));
// var num2 = parseInt(prompt("숫자를 입력하세요"));

// if(num1 > num2){
//   min_num = num2;
//   max_num = num1;
// }else{
//   min_num = num1;
//   max_num = num2;
// }


// for (var i=min_num; i<= max_num; i++){
//     for(var j=2; j< i; j++){
//       if(i % j == 0) {
//         break;
//       } 
//     }
//     if(i == j){console.log(i); count++;}
//   }


