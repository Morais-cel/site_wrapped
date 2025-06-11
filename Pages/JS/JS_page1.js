function skip(){
    var x=100
    const bar=document.getElementById("progress_bar_check")

    const interval = setInterval(() =>{
        if(x<=10){
            clearInterval(interval);
            return
        }

        bar.style.left=x+"px";
        x-=1;
    },10)
}