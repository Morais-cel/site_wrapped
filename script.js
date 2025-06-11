/* Vari Globais */
    var count_style=1
    var count_img=1
    var count_music=1

    document.getElementById("music").volume=0.25

    const page1= document.getElementById("page1")
    const page2= document.getElementById("page2")
    const page3= document.getElementById("page3")
    const page4= document.getElementById("page4")

function next_page(){
    page4.style.animationPlayState="running"
    setTimeout(()=>{
        page3.scrollIntoView({
        behavior: "smooth",
        block: "end",
        })
        setTimeout(()=>{
            page4.style.display="none"
            page3.style.animationPlayState="running"
            setTimeout(()=>{
                page2.scrollIntoView({
                behavior: "smooth",
                block: "end",
                })
                setTimeout(()=>{
                    page3.style.display="none"
                    page2.style.animationPlayState="running"
                    setTimeout(()=>{
                        page1.scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                        })
                        setTimeout(()=>{
                            page2.style.display="none"
                            page1.style.animationPlayState="running"
                            setTimeout(()=>{
                                location.assign("Pages/page1.html")
                            },500)
                        },300)
                    },500)
                },300)
            },500)
        },300)
    },500)

    
    
}


function funct_next(){
    player=document.getElementById("music")

    if (count_style<3){
        count_style++
    }else{
        count_style=1
    }
    switch (count_style){
        case 1:
            document.documentElement.style.setProperty('--cor1','#F20C1F')
            document.documentElement.style.setProperty('--cor2','#F20C49')
            document.documentElement.style.setProperty('--cor3','#F20C78')
            document.documentElement.style.setProperty('--cor4','#FE3A9C')
            player.src= "Msc/Init.mp3"
            break
        case 2:
            document.documentElement.style.setProperty('--cor1','#EF6024')
            document.documentElement.style.setProperty('--cor2','#F0941F')
            document.documentElement.style.setProperty('--cor3','#90A19D')
            document.documentElement.style.setProperty('--cor4','#196774')
            player.src= "Msc/Music2.mp3"
            break
        case 3:
            document.documentElement.style.setProperty('--cor1','#B4BEC9')
            document.documentElement.style.setProperty('--cor2','#159A9C')
            document.documentElement.style.setProperty('--cor3','#002333')
            document.documentElement.style.setProperty('--cor4','#DEEFE7')
            player.src= "Msc/Music3.mp3"
            break
    }
    player.load()
    player.play()
}

function def_time(year,month,day,hour,min){
/* Variáveis do próprio JS */

    var Init_date= new Date(year,month-1,day-1,hour,min).getTime()
    var Act_date= new Date().getTime()
    var dif_time= (Act_date-Init_date)/1000
    var dif_y= parseInt(dif_time/(3.154*(10**7)))
    var dif_mo= parseInt((dif_time%(3.154*(10**7)))/(2.62*(10**6)))
    var dif_d= parseInt(((dif_time%(3.154*(10**7)))%(2.62*(10**6)))/(8.64*(10**4)))
    var dif_h= parseInt((((dif_time%(3.154*(10**7)))%(2.62*(10**6)))%(8.64*(10**4)))/3600)
    var dif_mi= parseInt(((((dif_time%(3.154*(10**7)))%(2.62*(10**6)))%(8.64*(10**4)))%3600)/60)
    var dif_se= parseInt(((((dif_time%(3.154*(10**7)))%(2.62*(10**6)))%(8.64*(10**4)))%3600)%60)
/* Variáveis do documento Wrapped */

    const index_Y=document.getElementById("Anos")
    const index_Mo=document.getElementById("Meses")
    const index_D=document.getElementById("Dias")
    const index_H=document.getElementById("Horas")
    const index_Mi=document.getElementById("Minutos")
    const index_S=document.getElementById("Segundos")

/* Código */

    index_Y.innerText=dif_y
    index_Mo.innerText=dif_mo
    index_D.innerText=dif_d
    index_H.innerText=dif_h
    index_Mi.innerText=dif_mi
    index_S.innerText=dif_se

}

function next_img(){
    count_img++
    if (count_img>5) {
        count=1
    }

    const act_slide=document.getElementById(`r${count_img}`)
    act_slide.checked=true
}

function msg_show(){
    const msg=document.getElementById("msg")
    const container=document.getElementById("container_main3")
    const container_text=document.getElementById("text_container")
    const body=document.getElementsByTagName("body")[0]

    msg.style.display="block";
    container_text.style.display="block";
    body.style.overflowY="hidden";
    container.scrollIntoView({
        behavior: "smooth",
        block: "center",  
    });
    container.style.animationPlayState = 'paused'

}

function msg_hidde() {
    const msg=document.getElementById("msg")
    const container=document.getElementById("container_main3")
    const body=document.getElementsByTagName("body")[0]

    msg.style.display="none";
    body.style.overflowY="auto";

    container.style.animationPlayState = 'running';
    
}

function timer(){

    const Year_init= NaN 
    const Month_init= NaN
    const Day_init= NaN
    const Hour_init= NaN
    const Min_init= NaN

    def_time(Year_init,Month_init,Day_init,Hour_init,Min_init)
    setInterval(timer,1000)
}

function music_ps(){
    count_music++
    const bars= document.getElementsByClassName("bar")
    const audio= document.getElementById("music")

    if(count_music%2!=0){
        audio.play();
        for (let bar of bars){
            bar.style.animationPlayState = 'running';
        }
    }else{
        audio.pause();
        for (let bar of bars){
            bar.style.animationPlayState = 'paused';
        }
    }
}

function structure(){

    const casal= "Casal"
    const special_date= "Data"
    

    const text_name= document.getElementById("Nome_casal")
    const special_text= document.getElementById("Init_date")

    text_name.innerText=casal
    special_text.innerText= special_date

    requestAnimationFrame(timer)
    setInterval(next_img,5000)

}


const arrow= document.getElementById("page4_action_container")
const box = document.getElementById("container_page4");
let startY = 0;
let initialMarginTop = 0;

arrow.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;

    const style = window.getComputedStyle(box);
    initialMarginTop = parseInt(style.marginTop);
});

arrow.addEventListener("touchmove", (e) => {
    const deltaY = e.touches[0].clientY - startY;

    if (deltaY<0 && deltaY>-55){
        box.style.marginTop = (initialMarginTop + deltaY) + "px";
    }
    
    e.preventDefault(); 
});



arrow.addEventListener("touchend", () => {
    if(parseInt(box.style.marginTop)<=-40){
        box.style.marginTop=0
        next_page()
    }else{
        box.style.marginTop=0
    }
})

page1.style.animationPlayState=page2.style.animationPlayState=page3.style.animationPlayState=page4.style.animationPlayState="paused"

setTimeout(()=>{
    document.getElementById("music").play()
},1000)
structure()