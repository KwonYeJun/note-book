const test = ["kwon", "pakr", "ju", "ye"];
const exkwon = "kwon";
const result = test.filter((x) => {
  if (x === exkwon) {
    console.log("있다.")
    return true;
  }
  else{
    return console.log( "그런 포켓몬은 없습니다.")
  }
});

console.log(result);