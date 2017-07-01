/**
 * Created by Administrator on 2017/3/28 0028.
 */
function promotion(){
    this.createpublic = function(){
        $(".header").load("../html/header.html");
        $(".footer").load("../html/footer.html");
        header();
    }
    this.createproimg = function(){
        var str = "";
        for(var i=1;i<10;i++){
            str += "<img src=\"../promotion_img/"+(i+1)+".jpg\"/>"
        }
        $(".banner").css({
            "background":"url('../promotion_img/1.jpg') no-repeat center top",
            "height":"710px"
        });
        $(".content").html(str).css({
            "display":"flex",
            "flex-direction":"column",
            "justify-content":"center",
            "align-items":"center",
            "background":"#f1f1f1"
        });
    }
}
function main(){
    var _promotion = new promotion();
    _promotion.createpublic();
    _promotion.createproimg();
}
window.onload = main;
