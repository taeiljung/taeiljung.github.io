window.onload = main();
function main(){

}

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particle'), {
    dotColor: '#999',
    lineColor: '#999',
    particleRadius:'4'
    /*parallaxMultiplier:'100'*/
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