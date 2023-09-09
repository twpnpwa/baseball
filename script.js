//1.랜덤숫자뽑기
let randomArr = [];

let first = Math.floor(Math.random() * 10);
let second = Math.floor(Math.random() * 10);
let third = Math.floor(Math.random() * 10);

// $("#randomball1").text(first);
// $("#randomball2").text(second);
// $("#randomball3").text(third);

// 3. 랜덤 숫자와 입력된 숫자 비교해서 ball / strike 출력

function game(ball1, ball2, ball3) {
  let count = 0;
  let result1 = "";
  let result2 = "";
  let result3 = "";

  if (ball1 === first) {
    console.log("S");
    result1 = "S";
    count++;
  } else if (ball1 === second || ball1 === third) {
    console.log("B");
    result1 = "B";
  } else {
    console.log("꽝");
    result1 = "꽝";
  }

  if (ball2 === second) {
    console.log("S");
    result2 = "S";
    count++;
  } else if (ball2 === first || ball2 === third) {
    console.log("B");
    result2 = "B";
  } else {
    console.log("꽝");
    result2 = "꽝";
  }

  if (ball3 === third) {
    console.log("S");
    result3 = "S";
    count++;
  } else if (ball3 === first || ball3 === second) {
    console.log("B");
    result3 = "B";
  } else {
    console.log("꽝");
    result3 = "꽝";
  }

  $("#result1").text(result1);
  $("#result2").text(result2);
  $("#result3").text(result3);

  if (count === 3) {
    return true;
  } else {
    return false;
  }
}

let count = 0;

$("#postingbtn").click(function () {
  let value = $("#dataInput").val();

  count += 1;

  console.log(first, second, third);

  console.log(value.split("")); // ()안에 들어간 내용을 기준으로 배열로 나눠준다

  let valueFirst = Number(value.split("")[0]);
  let valueSecond = Number(value.split("")[1]);
  let valueThird = Number(value.split("")[2]);

  $("#ball1").text(valueFirst);
  $("#ball2").text(valueSecond);
  $("#ball3").text(valueThird);

  let result = game(valueFirst, valueSecond, valueThird); // true, false (true = 정답, false = 오답)

  if (result === true) {
    console.log(count);
    alert(`${count}번 만에 정답을 맞췄습니다`);
  }
});