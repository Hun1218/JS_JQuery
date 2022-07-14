var math = 80;
var kor = 80;
var vor = 80;

if (math >= 90 || kor >= 90 || vor >= 90){
    kind = 'A';
}else if(85 >= math >= 80 || kor >= 80 || vor >= 80){
    kind = 'B';
}else if(math >= 70 || kor >= 70 || vor >= 70){
    kind = 'C'
}else{
    kind = 'F'
}

console.log(kind)