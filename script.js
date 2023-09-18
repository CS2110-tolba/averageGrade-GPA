function submit(){
    //Declaring Variables
    let name = document.querySelector("#Name");
    let year1 = document.querySelector("#year1");
    let year2 = document.querySelector("#year2");
    let year3 = document.querySelector("#year3");
    let year4 = document.querySelector("#year4");
    let year5 = document.querySelector("#year5");
    let noti = document.querySelector(".notification");
    let status = 0;
    let GPA = 0;

    //restart Style
    name.style.backgroundColor = "white";
    year1.style.backgroundColor = "white";
    year2.style.backgroundColor = "white";
    year3.style.backgroundColor = "white";
    year4.style.backgroundColor = "white";
    year5.style.backgroundColor = "white";
    noti.innerHTML = "Waiting for your input ...";
    
    //Checking Inputs
    if((name.value.length == 0)){
        name.style.backgroundColor = "#ff5252";
        noti.innerHTML = "Input Error in name";
        status = 1;
    }
    if((year1.value > 5 || year1.value < 1)||(year1.value < 0)||(year1.value.length == 0)){
        year1.style.backgroundColor = "#ff5252";
        noti.innerHTML = "Input Error in year1";
        status = 1;
    }
    if((year2.value > 5 || year2.value < 1)||(year2.value < 0)||(year2.value.length == 0)){
        year2.style.backgroundColor = "#ff5252";
        noti.innerHTML = "Input Error in year2";
        status = 1;
    }
    if((year3.value > 5 || year3.value < 1)||(year3.value < 0)||(year3.value.length == 0)){
        year3.style.backgroundColor = "#ff5252";
        noti.innerHTML = "Input Error in year3";
        status = 1;
    }
    if((year4.value > 5 || year4.value < 1)||(year4.value < 0)||(year4.value.length == 0)){
        year4.style.backgroundColor = "#ff5252";
        noti.innerHTML = "Input Error in year4";
        status = 1;
    }
    if((year5.value > 5 || year5.value < 1)||(year5.value < 0)||(year5.value.length == 0)){
        year5.style.backgroundColor = "#ff5252";
        noti.innerHTML = "Input Error in year5";
        status = 1;
    }

    //calculating GPA
    if(status == 1){return 0;}
    else{
        GPA = ((parseFloat(year1.value) + parseFloat(year2.value) + parseFloat(year3.value) + parseFloat(year4.value) + parseFloat(year5.value))/5).toFixed(2);
        noti.innerHTML = `${name.value} your GPA is ${GPA}`;
    }
}
