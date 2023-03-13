function myName(myname) {
  console.log(myname);
}
function name(myname) {
  return myname;
}
function lenght(str) {
  let result = str.lenght;
  return result;
}

function printNumber(a, b) {
  console.log(a * b);
}

function getNumber(a, b) {
  return;
}

function getSom(usd) {
  return usd * 87;
}
console.log(getSom(8000));

function isSpeeding(miles) {
  if (miles >= 40) {
    return true;
  } else {
    return false;
  }
}
console.log(isSpeeding(30));

function hasFever(t) {
  if (t >= 37) {
    return true;
  } else {
    return false;
  }
}

let i = 1;
console.log(i);
i = 2;
console.log(i);

i = i + 1;
console.log(i);

i += 1;
console.log(i);

i++;
console.log(i);

let b = 1;
while (b <= 100) {
  console.log(b);
  b++;
}

let number = 10;
while (number > 0) {
  console.log(number);
  number--;
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


console.log(hasFever(39));



printNumber(4, 5);


for (let i = 1; i <= 50; i++){
  if(i & 13 === 0){
    continue;
  }
  console.log(i);
}

let a = 1;
while(true){
  console.log("hello")
  if(a % 13 === 0){
    break;

  }
  a++;
}
/*
lenght("hello");
myName("Айдин");
*/
