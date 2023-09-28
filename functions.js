// function login(username,password){
//     console.log('welcome' ,username);
// }

// login('ashish');

function sum(a,b){
    return (a+b);
}
const c=sum(2,3);
console.log('sum',c);
console.log('sum=',sum(4,6));
//function expression
const square=function(n){
    return (n*n);
}
console.log('square=',square(4));

//Arrow function

const a=["so","h2o"];
const a1=a.map(function(s){
    return s.length;
});

console.log("length=",a1)


