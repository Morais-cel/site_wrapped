function skip(x){
    const bar=document.getElementById("progress_bar_check")
    let check=""
    let a=0

    switch (x){
        case 0:
            a=45;
            check=document.getElementById("second_check");
            element=document.getElementById("second");
            element_2=document.getElementById("third");
            element_2.onclick= () => skip(48);
            element.onclick=null;
            break
        case 48:
            a=95
            check=document.getElementById("third_check");
            element=document.getElementById("third");
            element.onclick=null;
    }
    const interval = setInterval(() =>{
        if(x>=a){
            clearInterval(interval);
            check.style.animationPlayState="running";
            return;
        }

        bar.style.left=x+"%";
        x+=1;
    },10)
}