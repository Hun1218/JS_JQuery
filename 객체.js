var person ={
  name : 'Lee',
  age : 30,
  sayHello: function () {
    var name = 'aaaa'
    console.log(`Hello! My name is ${this.name}.`);
    console.log(`Hello! My name is ${this.age}.`);
    console.log(`Hello! My name is ${this.tel}.`);
    str = `<table border=1 align ="center">`;
    str += `<tr><th>name</th><th>age</th><th>tel</th></tr>`;
    str += `<tr><td>${this.name}</td><td>${this.age}</td><td>${this.tel}</td></tr>`;
    str += `</table>`;
    return document.write(str);
  }
};

person.tel = "010-7897-4125";
console.log(person.tel);
console.log(person);
person.sayHello();

// console.log(typeof person);
// console.log(person);
// console.log(person.name);
// console.log(person['name']);
// console.log(person["name"]);
// console.log(person[`name`]);
// console.log(person.seyHello());
