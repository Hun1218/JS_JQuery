        var num1=parseInt(prompt("첫번째 숫자 입력 : "));
        var num2=parseInt(prompt("두번째 숫자 입력 : "));

        var a;
        var b;
        var cnt2=0;
        if(num1>num2){
            a=num2;
            b=num1;
        }else{
            a=num1;
            b=num2;
        }
        
        for(var i=a;i<=b;i++){
            var cnt1=0;
            for(var j=2;j<=b;j++){
                if(i%j == 0){
                    cnt1 ++;
                }
            }
            if(cnt1 == 1){
                console.log(i);
                cnt2++;
            }
        }

        console.log('소수의 갯수 : ' + cnt2 +'개');