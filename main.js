
const btn =document.querySelector(".btn");
const txt = document.querySelector(".p7");
const in1 =document.querySelector(".in1");
const in2 =document.querySelector(".in2");
const in3 =document.querySelector(".in3");
const in4 =document.querySelector(".in4");
const in5 =document.querySelector(".in5");
const in6 =document.querySelector(".in6");
let GPA = (Number( in2.value)+Number( in3.value )+Number( in4.value )+Number( in5.value )+Number( in6.value ))/5;

btn.addEventListener("click",function()
{
    for(let i = 2 ; i< 7 ; i++)
    {
       
     let input = document.querySelector(".in"+i);
     if(Number(input.value) > 0 && Number(input.value) < 6 )
     {
       
        input.style.backgroundColor = "#70ca9d";
       
     }
     else 
     {
        input.style.backgroundColor = "#70ca9d";
        btn.style.backgroundColor="#edb252"
        txt.classList.remove("opacity");
        txt.textContent = `Invalid GPA `;
        btn.addEventListener("click",function()
        {
           input.style.backgroundColor="red";
        });
     }
    }
    if(Number( in2.value)>0&&Number( in2.value )<6
    &&Number( in3.value)>0&&Number( in3.value )<6
    &&Number( in4.value)>0&&Number( in4.value )<6
    &&Number( in5.value)>0&&Number( in5.value )<6
    &&Number( in6.value)>0&&Number( in6.value )<6)
    { 
        txt.classList.remove("opacity");
        txt.textContent = `hello,${in1.value}! Your GPA is ${GPA} `;

    }
});


