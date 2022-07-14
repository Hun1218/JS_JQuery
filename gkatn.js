// function add(x,y){
//   return x + y;
// }

 var f = function add(x, y){
       return x + y;
}; // 함수 리터널를 정의할때는 세미콜론으로 정의한다. 리터널 할때는 함수이름을 정의하지않음
// 함수 리터널은 함수이름 생략가능 = 익명함수

var f = (x, y) => x + y; //화살표 함수

var res = f(3, 5); //함수 호출문
console.log(res); 

// 기본형태
// function 함수명 (입력파라메터){
//  함수 내용;
//  return 반환값;
// } 

// 함수명(파라메터); <= 함수호출문
// 파라메터(인수)
// 1. 형식매개변수(가인수) - 함수를 정의할때 기술
// 2. 실매개변수(실인수) - 함수를 호출할때 기술

// 함수를 사용하는 이유 - 코드의 재사용, 코드의 중복성을 피할 수 있음, 
// 적절한 함수의 이름은 함수의 역활을 파악하여 코드의 가독성을 향상시킴

// console.log(f(3, 5));
// console.log(add(3, 5)); // 변수에 함수을 대입할 경우 함수 명으로 호출할수없음

//함수 선언문
// function add (x, y){
//   return x + y;  // 실행 전 컴파일 하기전
// }

// 함수 표현식
// var sub = function(x, y){
//   return x + y;  // 실행 후 함수 대입
// };

// console.log(a);
// var a = 10;  // 컴파일 하기 전에 선언 먼저 실행 //변수에 대한 호이스팅

// //자바스크립트 실행 순서
// // 1. 실행 전 선언문만을 먼저 실행한다.(전처리)
// // 2. 코드를 순서대로 실행한다.(본문 실행)
// //함수 호이스팅

// var add = (x, y) => x+y;

// console.log(add(2,5));

// // 형식 매개변수는 함수 안에서만 사용가능 밖에서는 사용불가

// // 기본 인자(default 인자)

// function add(x, y){
//   return x + y;
// }

// console.log(add(1));
// console.log(add('a', 'b'));

// function multplt(x , y){
//   if( x - y < 0){
//     return x * y;
//   }else {
//     return x / y;
//   }
// }

// var result = multplt(10, 5);
// console.log(result);

function changeVal(primitive, obj){
  primitive+= 100;
  obj.name = 'kim';
}

var num = 100;
var person = {name : 'Lee'};

console.log(num);
console.log(person);


changeVal(num, person);
console.log(num);
console.log(person);
console.log(num);

// (function (){
//   var a = 3;
//   var b = 5;
//   console.log(a,b);
//   return a * b;
// }());
