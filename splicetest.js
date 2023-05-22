// `const numbers = [1, 2, 3, 4, 5];`

// `// 인덱스 2부터 2개의 요소를 제거하고, 새로운 요소 6, 7을 추가합니다.
// numbers.splice(2, 2, 6, 7);`

// `console.log(numbers); // [1, 2, 6, 7, 5]`


const numbers = ['kwon', 'ye', 'jun', 'jul', 'aug', 'sep'];
const testlist = numbers.splice(0, 2, 'test');

// ! 새로운 배열 하나를 만들어 범위의 숫자 만큼 제거한 값을 배열로 만들어 주었다.
console.log("splice",testlist);

// ! 원래 배열의 있는 값을 지우고 test를 추가 해주었다.
console.log(numbers);
