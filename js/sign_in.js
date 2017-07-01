function sign_in(){
	this.createpublic = function(){
		$(".header").load("../html/header.html");
		$(".footer").load("../html/footer.html");
		var _header = new header();
	}
	this.signIn = function(){
		// console.log(1)
        document.getElementById("submit").onclick=function() {
            ajaxRequest("post", "../PhpInterface3/login.php", true, {
                "user": document.getElementById("txt").value,
                "pwd": document.getElementById("pwd").value
            }, function (data) {
                /**
                 * {"user":"h51615","pwd":"123456"}
                 * 向服务器传递参数，上面的两个key不可改变。
                 */
                console.log(data)
                data=data.replace(/\s+/g,"");
                console.log(data)
                if(data!="0") {
                    document.getElementById("tip").innerHTML = "欢迎："+data+"，登录";
                }else{
                    alert("用户名或者密码错误！！！请输入正确的用户名或者密码!!!");
                }
            });
        }
	}
    $("#submit").click(function(){
        // window.history.go(-1);
    })

		
}
function main(){
	var _sign_in = new sign_in();
	_sign_in.createpublic();
	_sign_in.signIn();
}
window.onload = main;
