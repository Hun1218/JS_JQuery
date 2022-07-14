var num = '1';
var kind;

//if
if (num > 0) { 
    kind = '양수'; //음수를 구별 할 수 없음
}

console.log(kind);

if(num > 0) {
    kind = '양수';
}else if(num < 0){
    kind = '음수';
}else{
    kind = '영';
}
console.log(kind);