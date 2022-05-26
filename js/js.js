window.onload = main();
function main(){

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
let btn1 = document.querySelector("#app > div > div.grid.g1.selected > div.title.a8 > a.ch1");
let btn2 = document.querySelector("#app > div > div.grid.g1.selected > div.title.a8 > a.ch2");
let btn3 = document.querySelector("#app > div > div.grid.g1.selected > div.title.a8 > a.ch3");

btn1.addEventListener('click',function(){
    bg.classList.remove('c2');
    bg.classList.remove('c3');
    bg.classList.add('c1');
    /*document.getElementById('particle').style.display='block';*/
})
btn2.addEventListener('click',function(){
    bg.classList.remove('c1');
    bg.classList.remove('c3');
    bg.classList.add('c2');
    /*document.getElementById('particle').style.display='block';*/
})
btn3.addEventListener('click',function(){
    bg.classList.remove('c1');
    bg.classList.remove('c2');
    bg.classList.add('c3');
    /*document.getElementById('particle').style.display='block';*/
})
 /* dot settings*/
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particle'), {
    dotColor: '#333',
    lineColor: '#333',
    particleRadius:'5',
    parallaxMultiplier:'20'
  });
}, false);


/*
const content = "_.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._";
const text = document.querySelector(".typing");
console.log(text.textContent)
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }*/

/*function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(3000);
    }
}
setInterval(typing, 200)*/