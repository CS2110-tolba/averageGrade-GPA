'use script'


const btn = document.getElementById("btn");
const input = document.getElementsByClassName("input");
const info = document.querySelector("#info");
const ArrForOutput = [];
var grades = [];

for(let i = 0 ; i < input.length ; i++){
input[i].addEventListener("change", function (e) {
  console.log(input[i]);
  if (input[i].value < 6){
    input[i].style.backgroundColor = "green"
  }else{
    input[i].style.backgroundColor ="red";
    info.innerText = `Invalid GPA ${input[i].name}`
  }
  grades.push(input[i].value)
});}


function statics() {
  var total = 0;
  for (var a = 0; a < grades.length; a++) {
    total += Number(grades[a]);
  }
  var avg = total / grades.length;
  console.log(avg);
  btn.style.background = "#F39F5A";
  info.innerText = `Hi ${Name.value} Your GPA Is : ${avg}`;
}
btn.addEventListener("mouseover", function () {
  btn.style.background = "#F39F5A";
});
btn.addEventListener("mouseleave", function () {
  btn.style.background = "lightblue";
});

btn.addEventListener("click", statics);




function borderRadios (){
    for(let i = 0 ; i < input.length ; i++){
        input[i].style.borderRadius = "2px";
        input[i].style.border = "none"
    }
}
borderRadios()