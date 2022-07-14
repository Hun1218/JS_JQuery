function input_check(form){
      let jumin1 = document.input_form.jumin1.value;
      let jumin2 = document.input_form.jumin2.value;
      // let jumin = prompt("000000-0000000 형식으로 주민번호를 입력하세요(공백없이)");
      // let jumin1 = form.jumin1.value;
      // let jumin2 = form.jumin2.value;
      let jumin = jumin1 + "-" + jumin2;
      alert(jumin);
      // console.log(jumin);
      let w=2, hap=0, chk;
      
      for(let i = 0; i < jumin.length; i++){
        if(i == 6){
          continue; //스킵
        }
        //  console.log("jumin=" + i);
        
        hap += parseInt(jumin.substring(i, i+1)) * w;
        //  console.log("hap=" + hap);
        
        w++;
        //  console.log("w==" + w);
        if(w == 10){
          w = 2;
        }
        
        
      }
      
      chk = 11 - (hap % 11);
      //  console.log("chk==" +chk);
      
      if(chk == 10){
        chk = 0;
      }else if (chk == 11){
        chk = 1;
      }
      
      if (chk == parseInt(jumin.substring(13))){
        str = jumin + "(정상)";
      }else{
        str = jumin + "(간첩)";
      }
      // console.log(str);
      alert(str);
}
  
  
