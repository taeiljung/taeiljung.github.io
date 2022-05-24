window.onload = main();

function main(){
}

/*const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
		console.log(e);
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        circle.style.left = mouseX + 'px';
        circle.style.top = mouseY + 'px';
});*/

const content = "_.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._";
const text = document.querySelector(".typing");
console.log(text.textContent)
let index = 0;

 function sleep(delay){ 
     const start = new Date().getTime(); 
     while (new Date().getTime() < start + delay); 
    }

/*function typing(){
    text.textContent += content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
        sleep(3000);
    }
}
setInterval(typing, 200)*/