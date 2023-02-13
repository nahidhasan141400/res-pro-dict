var i = 1257;
function myloop(){
    setTimeout(()=>{
        let st = 500+i;
        window.open("https://ssc2004star.com/cardSad/0423"+ st );
        i--;
        if(i>=1200){
            myloop()
        }
    },10000)
}
myloop();


setTimeout(()=>{
    let btn = document.querySelector(".head");
    if(!btn){
    return window.close();
    };
    btn.children[1].click();
    setTimeout(()=>{
    window.close();
    },10000)
   },5000)