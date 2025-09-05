// 1

function greet(){
    console.log("안녕 내 이름은 제시카야")
}

// 2

function greet(name){
    console.log("안녕 내 이름은",name,"야")
}

// 3

function greet(name){
    console.log("안녕 내 이름은",name,"야")
    return name
}
const name = greet("지영")
console.log("안녕 내 이름은",name,"이야")


// 4


function meetAt(year, month, date) {

    if (date) {
      return `${year}/${month}/${date}`;
    }
    if (month) {
      return `${year}년 ${month}월`;
    }
    if (year) {
      return `${year}년`;
    }
  
  }
  
  console.log(meetAt(2025,9,4))

  
  // 5

  function findSmallestElement(arr) {
	if (arr.length === 0 ) {
		return 0;
	}
    let result = arr[0];
  for (let i = 1;i < arr.length; i++){
		if(result > arr[i]){
			result = arr[i];
		}
	}
	return result;
}

let smallestNumber = findSmallestElement([300,5,3,0,4,1])
console.log(smallestNumber)



