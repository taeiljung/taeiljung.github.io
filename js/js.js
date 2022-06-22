window.onload = main();
function main(){
    window.addEventListener('resize',()=>{
    let mobile_check = window.getScreenDetail;  
    console.log(mobile_check)
    })
}

/*slide part*/
var menu = document.querySelector("#app > div > div.grid.g1.selected > div.title.a4 > a");
var xbutton = document.querySelector("body > div.menu > .quit");
var slider = document.querySelector("body > div.menu");
menu.addEventListener('click',function(){
    slider.classList.add('click');
})
xbutton.addEventListener('click',function(){
    slider.classList.remove('click');
})

/*bulk(bg) change part*/
let bg = document.querySelector("#bulk");
/*let btn1 = document.querySelector("#app > div > div.grid.g1.selected > div.title.a8 > a.ch1");
let btn2 = document.querySelector("#app > div > div.grid.g1.selected > div.title.a8 > a.ch2");
let btn3 = document.querySelector("#app > div > div.grid.g1.selected > div.title.a8 > a.ch3");
let bulk1 = document.querySelector("#bulk.b1");
let bulk2 = document.querySelector("#bulk.b2");
let bulk3 = document.querySelector("#bulk.b3");

btn1.addEventListener('click',function(){
    bulk1.classList.add('vi');
    bulk2.classList.remove('vi');
    bulk3.classList.remove('vi');
})
btn2.addEventListener('click',function(){
    bulk1.classList.remove('vi');
    bulk2.classList.add('vi');
    bulk3.classList.remove('vi');
})
btn3.addEventListener('click',function(){
    bulk1.classList.remove('vi');
    bulk2.classList.remove('vi');
    bulk3.classList.add('vi');
})*/

 /* dot settings*/
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particle'), {
    dotColor: '#F2E3D5',
    lineColor: '#F2E3D5',
    particleRadius:'5',
    parallaxMultiplier:'20'
  });
}, false);



const content = "______________";
const text = document.querySelector(".typing");
console.log(text.textContent)
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(0);
    }
}
setInterval(typing, 200)