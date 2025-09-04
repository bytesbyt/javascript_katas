// 1

let sum = 0;
for (let i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);

// 2
for ( let i = 1; i < 101; i+=2) {
    console.log(i)
}

// 3

for(let i = 1; i <= 50; i++) {
    let matches = i.toString().match(/[369]/g); //Regex: [369]는 3, 6, 9를 찾는 패턴, g(Global)는 모든 매칭을 찾는 플래그
    console.log(matches ? '짝'.repeat(matches.length) : i); 
}

//  4
let input = 12;
let isPrimeNum = true;

if (input === 1) {
    isPrimeNum = false;
}

for (let i = 2; i < input; i++) {
    if (input % i === 0) {
        isPrimeNum = false;
        break;
    }
}
console.log(isPrimeNum);