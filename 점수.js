var person={
  hakbun: '',
  irum: '',
  kor: 0,
  eng: 0,
  math: 0,
  tot: 0,
  avg: 0.0,
  grade: '', //객체 선언
  // getTotal: function(){  //메소드 선언
  //   this.tot = this.kor + this.eng + this.math;
  // }
  getTotal(){  //메소드 선언
    this.tot = this.kor + this.eng + this.math; //객체 내부에서는 this로 접근 
                                                // 외부에서는 메서드로 접근
  },
  getAvg: function(){
    this.avg = this.tot / 3;
  }, 
  getGrade: function(){
    switch (parseInt(this.avg / 10)){
      case 10:
      case 9: 
        this.grade = "수";
        break;
      case 8:
        this.grade = "우";   
        break;
      case 7:
        this.grade = "미";   
        break;
      case 6:
        this.grade = "양";
        break;   
      default:
        this.grade = "가";   
        break;
      }
      
    },
    printData: function() { //메소드 선언
      str = `<table border=1 align ="center">`;
      str += `<tr><th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>총점</th><th>평균</th><th>등급</th></tr>`;
      str += `<tr><td>${this.hakbun}</td><td>${this.irum}</td><td>${this.kor}</td><td>${this.eng}</td><td>${this.math}</td><td>${this.tot}</td><td>${this.avg}</td><td>${this.grade}</td></tr>`;
      str += `</table>`;
      return document.write(str); //리턴 화면 출력
    }
};

person.hakbun = prompt("학번을 입력하세요");
person.irum = prompt("이름을 입력하세요");
person.kor = parseInt(prompt("국어점수을 입력하세요"));
person.eng = parseInt(prompt("영어점수을 입력하세요"));
person.math = parseInt(prompt("수학점수을 입력하세요"));
person.getTotal();
person.getAvg();
person.getGrade(); // 함수 호출
person.printData(); //함수 호출