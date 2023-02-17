document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 1700){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('animate__animated animate__bounceInLeft');
            }
        }
        else{
            if(trangthai=="tren300"){
            menu.classList.remove('animate__animated animate__bounceInLeft');
            trangthai="duoi300";}
        }
    
    })
})