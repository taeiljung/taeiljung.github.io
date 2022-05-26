window.onload = main();
function main(){

}

/*button 3개를 만들어 색상변경 기능구현*/

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