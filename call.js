function repeat(n, f){
  // i를 출력한다
  for(var i = 0; i< n; i++){
   f(i);
  }  // 고차함수
}
// repeat(5);

// function repeat2(n){
//   for(var i = 0; i < n; i++){
//     //  i가 홀수 일 때 출력한다
//     if(i % 2){
//       console.log(i);
//     }
//   }
// }
// repeat2(5);

var logAll = function (i){
  console.log(i);
};

repeat(5, logAll); //콜백함수

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

repeat(5, function (i) {
  if (i % 2) console.log(i);
}); //익명함수는 일회성 간단한 구조나 일회성만 사용추천
