let textCounter=document.querySelector(".text");
let div=document.querySelector(".div");
let number=document.querySelector(".number-count");

div.addEventListener("mousemove",function(e){
    number.style.top=[e.clientY/10]+"px";
    number.style.left=[e.clientX/10]+"px"
})

let text=textCounter.innerHTML;

textCounter.innerHTML=""

let count=-1

const typeJs=()=>{
    count++;
    textCounter.innerHTML+=`${text.charAt(count)}`

    if(count==text.length){
        clearInterval(settime);
        div.style.display="flex"
       let setNum= number.innerHTML
       number.innerHTML=""
        let num=0
       let numberJs=()=>{
            num++;
            number.innerHTML=num;
            if(num==setNum){
                clearInterval(stopNum)
            }
       }

       let stopNum=setInterval(()=>{
        numberJs()
       },500)

    
    }
}


const settime=setInterval(()=>{
    typeJs()
},500)

