let btn1 = document.getElementById("mybutton");
let btn2 = document.getElementById("mybutton1");
let copyDiv =document.querySelector(".copycode")
let rgb1 = "rgb(92,145,299)";
let rgb2 = "rgb(152,63,198)";

const hexValues =() =>{
let myHexValues ="0123456789abcdef";
let colors ="#"
for( let i =0 ; i < 6  ; i ++ ){
  colors = colors+ myHexValues[Math.floor(Math.random() * 16)];
}
return colors;



};

const handleButton1 =() =>{

 rgb1 = hexValues();

console.log(rgb1);
btn1.innerHTML=rgb1

document.body.style.backgroundImage =`linear-gradient(to right,${rgb1},${rgb2})`;
copyDiv.innerHTML =`background-image:linear-gradient(to right,${rgb1},${rgb2})`
};
const handleButton2 =()=>{

   rgb2 = hexValues();

console.log(rgb2);
btn2.innerHTML=rgb2
document.body.style.backgroundImage =`linear-gradient(to right,${rgb1},${rgb2})`;
copyDiv.innerHTML =`background-image:linear-gradient(to right,${rgb1},${rgb2})`
}

btn1.addEventListener("click",handleButton1)
btn2.addEventListener("click",handleButton2)


copyDiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copyDiv.innerText)
})