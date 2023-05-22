const exam : string[] = ["피카츄","라이츄","파이리","꼬부기"];
// 위의 exam 배열은 문자열로만 구성된 배열이라는 점을 typescrit의 타입명시를 통해 손귑게 알아낼 수 있다. => string[]
// 하지만 '문자열' 은 구별해니지만, 해당되는 포켓몬스터 원소값인지는 알아내지 못한다.
// 데이터타입은 10개가 되지 않기 때문에 커스텀 타입을 지정해주는 방법을 강력하게 지원한다.
// ? 커스텀 타입을 지원 한다는 말이 잘 이해가 안됩니다.
// 다른 언어에서든ㄴ enum을 사용하지만, typescript에서는 union type을 사용한다.
//여기서 enum은 '열거하다' 라는 상당히 중요한 개념이 프로그래밍 언어 일반(standard)에서 존재 하는데 메모리 공간을 활용하거나 효율적인 코드를 작성하기 위해 사용한다.

// 자바스크립트는 메모리를 직접제어하지 않는 언어이기  때문에 enum개념이 흐리지만, typescript에서는 enum을 사용할 수 있다.

// enum은 열거형이라는 뜻으로, 특정 값들의 집합을 의미한다. 집합이라는 단어가 거부감이 있지만, '세트'라고 생각하는 것으로 비유할 수 있다.

// 아래는 개발자가 직접 Pokemon이라는 타입을 정의한 예로, 4개의 원소값에 해당되지 않으면 에러를 발생시킨다.

// Pokemon 타입의 정의 : 버티컬 바, | 보통 엔터(리턴)위에 있다.
type Pokemon = "피카츄" | "라이츄" | "파이리" | "꼬부기" | "이상해씨";
// type 정의는 보통 파스칼케이스로 작성하는 편이다.(첫글자가 대문자)

// Pokemon 배열의 타입을 명시
const pokemon: Pokemon[] = ["피카츄","라이츄","파이리","꼬부기"];
//위에 exam 배열과 같은 내용을 담은 배열이지만, 안정성 면에서는 pokemon 배열이 좋은 선택이다.
// exampleOne() 함수 정의
function exampleOne(pokemonName: Pokemon): void{
  // 함수 exampleOne()은 리턴이 없는 함수이므로 void를 사용한다.
  if(pokemon.includes(pokemonName)){
    console.log(`"${pokemonName}"은 유효한 포켓몬 입니다.`);  
  }
  else{
    console.log(`"${pokemonName}"은 유효한 포켓몬이 아닙니다.`);
  }
}

// exampleOne() 함수 호출
exampleOne("피카츄"); 
// 출력 : "피카츄"는 유요한 포켓몬이다.
//아래는 typescript인 경우 컴파일하기전에 에러산이이 발생한다.
//컴파일 전에 확인 할 수 있다는 것이 typescript의 가장 큰 장점이다.
exampleOne("이상해씨");