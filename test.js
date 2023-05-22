var exam = ["피카츄", "라이츄", "파이리", "꼬부기"];
// type 정의는 보통 파스칼케이스로 작성하는 편이다.(첫글자가 대문자)
// Pokemon 배열의 타입을 명시
var pokemon = ["피카츄", "라이츄", "파이리", "꼬부기"];
//위에 exam 배열과 같은 내용을 담은 배열이지만, 안정성 면에서는 pokemon 배열이 좋은 선택이다.
// exampleOne() 함수 정의
function exampleOne(pokemonName) {
    // 함수 exampleOne()은 리턴이 없는 함수이므로 void를 사용한다.
    if (pokemon.includes(pokemonName)) {
        console.log("\"".concat(pokemonName, "\"\uC740 \uC720\uD6A8\uD55C \uD3EC\uCF13\uBAAC \uC785\uB2C8\uB2E4."));
    }
    else {
        console.log("\"".concat(pokemonName, "\"\uC740 \uC720\uD6A8\uD55C \uD3EC\uCF13\uBAAC\uC774 \uC544\uB2D9\uB2C8\uB2E4."));
    }
}
// exampleOne() 함수 호출
exampleOne("피카츄");
// 출력 : "피카츄"는 유요한 포켓몬이다.
//아래는 typescript인 경우 컴파일하기전에 에러산이이 발생한다.
//컴파일 전에 확인 할 수 있다는 것이 typescript의 가장 큰 장점이다.
exampleOne("이상해씨");
