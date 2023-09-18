const name  = document.querySelector('#name')
const years = document.getElementsByClassName('years')
const btn   = document.getElementById('btn')
const mess   = document.querySelector('#msg')







  function calc(){
    let gpa = 0
    let error = 0
    let count = 0
    
    for(let i = 0; i < years.length;i++){
    
    if(years[i].value > 5 || years[i].value == 0)
    {
      years[i].style.backgroundColor = "#ff0000"
      error = i + 1;
    }
    else if(years[i].value > 0)
    {
      years[i].style.backgroundColor = "#00ff00"
      gpa += parseFloat(years[i].value) / 5
    }
  } 

  if(error > 0)
  {
    document.querySelector('#msg').innerHTML = "Invaild In Year " + error
  }
  else
  {
    document.querySelector('#msg').innerHTML = "Hello " + document.getElementById('name').value + "! " + "Your GPA = " + gpa.toFixed(2)
  }
}
