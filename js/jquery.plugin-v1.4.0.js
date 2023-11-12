
(function($){
    $.fn.changeImage=function(){
    //tableau des images
    var bgTab=["img/banner-1.jpg","img/banner-2.jpg","img/banner-3.jpg"];
    var num=0;
    
    this.css("background-image", "url("+bgTab[num]+")");
    $("#home").addClass("image-size");
    

setInterval(function(){
    $("#home").removeClass("image-size");
  if(num<bgTab.length-1){
        num++;  
    }
     else if(num==bgTab.length-1){
            num=num-(bgTab.length-1);
     } 
     $("#home").css("background-image", "url("+bgTab[num]+")");
     

     setTimeout(function(){
        $("#home").addClass("image-size");
     },1000); 
     

    },15000);
    


}  
})(jQuery);