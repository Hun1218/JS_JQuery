// const target = 'Is this all there is?';
// // const regexp = /is/i;
// // const regexp = new RegExp(/is/i);
// const regexp = new RegExp(/is/, 'i');
// console.log(regexp.test(target));

////////////////////////////////////////////////

// const target = 'Is this all there is?';
// const regExp = /is/;
// console.log(regExp.exec(target));
// console.log(regExp.exec(target)[0]);
// console.log(regExp.exec(target)[1]);

//////////////////////////////////////////////

// const target = 'Is this all there is?';
// const regExp = /is/ig;
// console.log(target.match(regExp));

///////////////////////////////////////////

// const target = 'A AA B BB Aa Bb AAA';
// const regExp = /A{1,2}/g;
// console.log(target.match(regExp));

/////////////////////////////////////////

// const target1 = 'A AA B BB Aa Bb AAA';
// const regExp2 = /A{2}/g;
// console.log(target1.match(regExp2));

///////////////////////////////////////

const target3 = 'A AA B BB Aa Bb AAA';
const regExp4 = /A{2,}/g;
console.log(target3.match(regExp4));

///////////////////////////////////////

const target5 = 'A AA B BB Aa Bb AAA';
const regExp6 = /A+/g;
console.log(target5.match(regExp6));

//////////////////////////////////////

const target7 = 'color colour';
const regExp8 = /colou?r/g;
console.log(target7.match(regExp8));

/////////////////////////////////////

const target9 = 'color colour';
const regExp10 = /colou+r/g;
console.log(target9.match(regExp10));

/////////////////////////////////////

const target11 = 'A AA B BB Aa Bb AAA';
const regExp12 = /A|B/g;
console.log(target11.match(regExp12));

/////////////////////////////////////

const target13 = 'A AA B BB Aa Bb AAA';
const regExp14 = /AA|BB/g;
console.log(target13.match(regExp14));

/////////////////////////////////////

const target15 = 'A AA B BB Aa Bb AAA';
const regExp16 = /A+|B+/g;
console.log(target15.match(regExp16));

//////////////////////////////////////

const target17 = 'A AA B BB Aa Bb BA AABB BBAA';
const regExp18 = /[AB]+/g;
const regExp19 = /A+|B+/g;
console.log(target17.match(regExp18));
console.log(target17.match(regExp19));
//////////////////////////////////////

const target20 = 'A AA B BB ZZ Aa Bb AZ BA ZA BZ';
const regExp21 = /[A-Z]/g;
console.log(target20.match(regExp21));

/////////////////////////////////////////

// const target = 'A1 A123 1A 123ABC';
// const regExp = /[0-9A-Za-z]+/g;
// const regExp2 = /[A-Za-z0-9]+/g;
// console.log(target.match(regExp));
// console.log(target.match(regExp2));

////////////////////////////////////////
// const target = 'AA BB 12,345';
// const regExp = /[0-9]+/g;
// console.log(target.match(regExp));
// const target2 = 'AA BB 12,345';
// const regExp2 = /[0-9,]+/g;
// console.log(target2.match(regExp2));

///////////////////////////////////////////

// const target = '12q q1234 aa123 123qwer';
// const regExp = /[a-zA-Z][A-Za-z0-9]+/g;
// console.log(target.match(regExp));

////////////////////////////////////////////

// const target = 'AA BB 12,345';
// const regExp = /[0~9,]+/g;
// console.log(target.match(regExp));
// const regexp = /[\d,]+/g;
// console.log(target.match(regexp));

/////////////////////////////////////////

// const target = 'Aa Bb 12,345 _$%&';
// let regExp = /[\w,]+/g;
// console.log(target.match(regExp));
// regExp = /[\W,]+/g;
// console.log(target.match(regExp));

///////////////////////////////////////////

// const url = 'https://example.com';
// console.log(/^https?:\/\//.test(url));

/////////////////////////////////////////////
// const fillName = 'index.html';
// console.log(/html$/.test(fillName));

// const target = '12345';
// console.log(/^\d+$/.test(target));

////////////////////////////////////////////
// const target = '         Hi!';
// console.log(/^[\s]+/.test(target));

////////////////////////////////////////////
