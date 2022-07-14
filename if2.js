var num = 11;
var kind;

if(num % 2 == 0){
    console.log("짝수");
    if (num % 4)
        console.log('4의배수');
}else{
        console.log("홀수");
        if(num % 3 == 0)
        console.log("3의 배수");
        else
        console.log("3의 배수가 아니다");
    }
    console.log("끝");