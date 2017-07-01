/**
 * Created by Administrator on 2017/3/30 0030.
 */
function sign_up() {
    this.createpublic = function () {
        $(".header").load("../html/header.html");
        $(".footer").load("../html/footer.html");
        var _header = new header();
    }
    this.dianji = function() {
        document.getElementById("submit").onclick = function () {
            if (document.getElementById("pwd").value == document.getElementById("sure").value) {
                ajaxRequest("post", "../PhpInterface3/regist.php", true, {
                    "account": document.getElementById("txt").value,
                    "secret": document.getElementById("pwd").value,
                    "mobile": document.getElementById("mobile").value

                }, function (data) {
                    data = data.replace(/\s+/g, "");
                    if (data == "0") {
                        alert("注册失败！！");
                    } else {
                        alert("恭喜！！！成功！！！");
                    }
                });
            } else {
                alert("两次输入的密码不一致，请重新输入！！");
            }
        }
    }
}

function main(){
    var _sign_up = new sign_up();
    _sign_up.createpublic();
    // _sign_up.signIn();
    _sign_up.dianji();
}
window.onload = main;