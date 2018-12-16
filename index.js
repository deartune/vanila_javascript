// JavaScript source code

function monday(time,task){
return("Monday "+time+" we have to "+task)

};

const onMonday = monday("8:00","go work");
console.log(onMonday);

monday("8:00","go work");



const calculator={
plus:function(a,b){return a+b;},
minus:function(a,b){return a-b},
divide:function(a,b){return a/b},
multiple:function(a,b){return a*b}
}

const plusSample = calculator.plus(4,5);
console.log(plusSample);

const minusSample =calculator.minus(12,7);
console.log(minusSample);

const divideSample =calculator.divide(20,2);
console.log(divideSample);

const multipleSample = calculator.multiple(3,4);
console.log(multipleSample);
