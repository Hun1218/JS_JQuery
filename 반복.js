var hap = 0;
var tr = 0;


// for(var i = 1; i< 11; i++){
//     if(i % 2 == 0){
//         tr += i;
//     }
//     else{
//         hap += i; // hap = hap + i;
//     }
// }

var count = 0;
for(var i = 1; i < 3; i++){
    for(var j = 1; j < 4; j++){
        console.log("i=", i, " j=", j, " count=",++count );
    }
}

console.log(hap)
console.log(tr)