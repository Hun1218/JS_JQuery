// var a = 1;
// var b = 1;
// var c = 1;
// var d = 1;
// var arr = [1,1,1,1]
// var arr = new Array(1,1,1,1);
// var hap = 0;
// for(let i = 0; i < arr.length; i++){ // length 길이 속성 
//   hap += arr[i]; //arr [] 인덱스 대괄호로 포함
// }
// console.log(hap); // 

// var arr1 = []; // var arr1 = new Array();
// console.log(arr1.length);
// console.log("================")
// arr1[0] = 10;
// arr1[1] = "AAA";
// console.log(arr1.length);
// console.log(arr1[0]);
// console.log(arr1[1]); // 없는 요소에는 undefined
// console.log("================")
// arr1[3] = "BBB";
// console.log(arr1.length);
// for (let i=0; i<arr1.length; i++){console.log(arr1[i]);}

// var arr1 = []; // var arr1 = new Array();
// console.log(arr1.length);
// arr1[0] = 10;
// arr1[1] = "AAA";
// arr1[2] = "BBB";
// console.log(arr1.length);
// for (let i=0; i<arr1.length; i++){
//   console.log(arr1[i]);
// }

// delete arr1[1]; // 배열 값만 삭제

// for (let i=0; i<arr1.length; i++){
//   console.log(arr1[i]);
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);
// console.log(arr);
// arr.splice(1, 1); //splice(삭제를 시작할 인덱스, 삭제할 요소 수) // arr[1] 부터 1개의 요소 제거
// console.log(arr.length);
// console.log(arr);

// for(let i = 0; i <arr.length; i++){
//   console.log(arr[i]);
// }

// 객체 = 속성(데이터) + 메서드(함수)

// 배열 = 특수한 구조의 객체 

// const arr = [1, 2, 2, 3];
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(4));
// console.log(arr.indexOf(2,2)); // 검색을 시작할 위치

//push 마지막 데이터 추가 indexOf 검색



// 팝 pop 마지막 데이터 위치를 확인하고 반환하여 삭제함 공간자체를 삭제함







//스택(stack) = LIFO(List In First Out ) 가장 마지막에 저장한 데이터를 가장 먼저 출력
// 큐(Quese) = FIFO(Fist In First Out) 각장 먼저 입력한 데이터를 가장 먼저 출력
// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// for(let i=0; i<3; i++){
//   console.log(arr.pop());
// }

const arr1 = [1, 2];
const arr2 = [3, 4];

// splice (삭제할 위치, 삭제할 갯수, 삭제한 위치에 새로운 데이터 추가)
// filter 특정 요소를 삭제 할 수 있음 중북도 삭제 가능 ()

// sort() ((a, b) => b - a ); 큰수부터 정렬


const todos = [
  {id : 4, content : 'JavaScript'},
  {id : 1, content : 'HTML'},
  {id : 2, content : 'CSS'}
]

function compare(key){
    return (a, b) => (a[key] > b[key] ? 1 :(a[key] < b[key] ? -1 : 0) );
}

todos.sort(compare('id'));
console.log(todos);