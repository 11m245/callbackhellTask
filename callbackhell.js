
var counter=10;
var div = document.createElement("div");
var ele = document.createElement("h1");
ele.innerText=counter;
div.append(ele);
document.body.append(div)

setTimeout(greet,1000);



function greet(){
    counter--;
    ele.innerText=counter;
   let timer=setTimeout(greet,1000);
   

    if(counter===0){
        ele.innerText="Happy Independance Day";
        ele.style.color="green";
        clearTimeout(timer);

    }

    
}