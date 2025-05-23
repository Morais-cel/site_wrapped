/* Vari Globais */
    var count=1

function def_time(year,month,day,hour,min){
/* Variáveis do próprio JS */

    var Init_date= new Date(year,month-1,day-1,hour,min).getTime()
    var Act_date= new Date().getTime()
    var dif_time= (Act_date-Init_date)/1000
    var dif_y= parseInt(dif_time/(3.156*(10**7)))
    var dif_mo= parseInt((dif_time%(3.156*(10**7)))/(2.628*(10**6)))
    var dif_w= parseInt(((dif_time%(3.156*(10**7)))%(2.628*(10**6)))/(6.048*(10**5)))
    var dif_d= parseInt((((dif_time%(3.156*(10**7)))%(2.628*(10**6)))%(6.048*(10**5)))/(8.64*(10**4)))
    var dif_h= parseInt(((((dif_time%(3.156*(10**7)))%(2.628*(10**6)))%(6.048*(10**5)))%(8.64*(10**4)))/3600)
    var dif_mi= parseInt((((((dif_time%(3.156*(10**7)))%(2.628*(10**6)))%(6.048*(10**5)))%(8.64*(10**4)))%3600)/60)

/* Variáveis do documento Wrapped */

    const index_Y=document.getElementById("Anos")
    const index_Mo=document.getElementById("Meses")
    const index_W=document.getElementById("Semanas")
    const index_D=document.getElementById("Dias")
    const index_H=document.getElementById("Horas")
    const index_Mi=document.getElementById("Minutos")

/* Código */

    index_Y.innerText=dif_y
    index_Mo.innerText=dif_mo
    index_W.innerText=dif_w
    index_D.innerText=dif_d
    index_H.innerText=dif_h
    index_Mi.innerText=dif_mi

}

function next_img(){
    count++
    if (count>5) {
        count=1
    }

    const act_slide=document.getElementById(`r${count}`)
    act_slide.checked=true
}

function msg_show(){
    const msg=document.getElementById("msg")
    const container=document.getElementById("container_main3")
    const body=document.getElementsByTagName("body")[0]

    msg.style.display="block";
    body.style.overflowY="hidden";
    container.scrollIntoView({
        behavior: "smooth",
        block: "center",  
    });
    container.style.animation="none"

}

function msg_hidde() {
    const msg=document.getElementById("msg")
    const container=document.getElementById("container_main3")
    const body=document.getElementsByTagName("body")[0]

    msg.style.display="none";
    body.style.overflowY="auto";

    container.style.animation="bounce_container 2s ease infinite"
    
}


function timer(){

    const Year_init= 2022
    const Month_init= 9
    const Day_init= 3
    const Hour_init= 21
    const Min_init= 0

    def_time(Year_init,Month_init,Day_init,Hour_init,Min_init)
    setInterval(timer,60000)
}

function structure(){

    const casal= "Júlia + Pedro"
    const special_date= "03 set. 2022"
    

    const text_name= document.getElementById("Nome_casal")
    const special_text= document.getElementById("Init_date")

    text_name.innerText=casal
    special_text.innerText= special_date

    requestAnimationFrame(timer)
    setInterval(next_img,5000)
}

structure()