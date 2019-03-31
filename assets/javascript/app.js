//make arrays of digit pictures
const numPics = [
  "zero.png",
  "one.png",
  "two.png",
  "three.png",
  "four.png",
  "five.png",
  "six.png",
  "seven.png",
  "eight.png",
  "nine.png"
];

const actionOp = [
  "plus_sign.png",
  "minus_sign.png",
  "times_sign.png",
  "divide_sign.png"
];

const equals = ["equal_sign.png"];

populate();

//randomly select the pics/digits to variables.
function getPics(infoArr, num) {
  let pic = infoArr[Math.floor(Math.random() * num)];

  return `
    <img src="assets/images/${pic}"/>
    `;
}

function populate() {
  let first = $("#box1").append(getPics(numPics, 9));
  let second = $("#box2").append(getPics(actionOp, 4));
  let third = $("#box3").append(getPics(numPics, 9));
  let fourth = $("#box4").append(getPics(equals, 1));
}
