outer:
  for(var i = 0; i < 3; i++){
    for (var j =0; j<3; j++){
      // i + j === 3 이면 outer 라는 식별자가 붙은 레이블 for 문을 탈출한다
      if(j === 1)
        // break  //레이블 전체 반복문에서 탈출할 수 있음
        continue outer; // 해당 조건을 만족하면 건너뛰거나 스킵 또한 해당 레이블 있으면 그 레이블 반복문으로 출력함 나머지를 출력함
        console.log(`inner [${i}, ${j}]`);
    }
  }

  console.log(`Done!`);