/**
 * Created by Administrator on 2017/3/28 0028.
 */
$.getJSON("../json/data_p.json",fx);
function fx(data){
    var _me = this;
    this.createpublic = function(){
        $(".header").load("../html/header.html");
        $(".footer").load("../html/footer.html");
        var _header = new header();
    }

    this.createproduct = function(){
        this.arr = Cookie.readCookie().split("=");
        if(this.arr==""){
            $("table tbody").html("");
            return;
        }
        var _me = this;
        // console.log(data)
        // console.log( Number(data[this.arr[0]]["p_price"].match(/\d+/)))
        this.str = "<tr>" +
            "<td class='_name'><img src='../images1/"+data[this.arr[0]]["p_main"]+"' alt=''><div><p>"+data[this.arr[0]]["p_name"]+"</p><p>颜色："+data[this.arr[0]]["p_color"]+"</p><p>尺码："+data[this.arr[0]]["p_size"]+"</p> </div></td>" +
            "<td>充足</td>" +
            "<td>"+data[this.arr[0]]["p_price"]+"</td>" +
            "<td class='shuliang'>"+"<div class='sub'>-</div><input type='text' value='"+this.arr[1]+"' class='shu'/><div class='add'>+</div>" +"</td>" +
            "<td class='xiaoji'>￥"+Number(data[this.arr[0]]["p_price"].match(/\d+/))*Number(this.arr[1])+"</td>" +
            "<td><span class='del'>删除</span></td>" +
            "</tr>";
        $("table tbody").html(this.str);
        // console.log($("tbody tr").length)
        this.jisuan = function() {
            var woshishuliang = 0;
            var woshizongshu = 0;
            for (var i = 0; i < $("tbody tr").length; i++) {
                woshishuliang += Number($("tbody tr").eq(i).find("input").val());
                woshizongshu += Number($("tbody tr").eq(i).find(".xiaoji").html().match(/\d+/));
                // console.log(woshishuliang)
                // console.log(woshizongshu)
            }
            $(".shangpinshuliang").html(woshishuliang);
            $(".shangpinzonge").html("￥"+woshizongshu);
        }

        $(".sub").click(function(){
            _me.arr[1] = _me.arr[1]-1;
            if (_me.arr[1]<0){
                _me.arr[1]=0;
            }
            Cookie.setCookie(_me.arr[0],_me.arr[1],"/",new Date(new Date().getTime()+7*24*3600*1000))
            $(".shu").val(_me.arr[1]);
            $(".xiaoji").html("￥"+Number(data[_me.arr[0]]["p_price"].match(/\d+/))*Number(_me.arr[1]));
            _me.jisuan();
        })
        $(".add").click(function(){
            _me.arr[1] = Number(_me.arr[1])+1;
            Cookie.setCookie(_me.arr[0],_me.arr[1],"/",new Date(new Date().getTime()+7*24*3600*1000))
            $(".shu").val(_me.arr[1]);
            $(".xiaoji").html("￥"+Number(data[_me.arr[0]]["p_price"].match(/\d+/))*Number(_me.arr[1]));
            _me.jisuan();
        })
        $(".shu").keyup(function () {
            // console.log($(".shu").val());
            _me.arr[1] = $(".shu").val();
            Cookie.setCookie(_me.arr[0],_me.arr[1],"/",new Date(new Date().getTime()+7*24*3600*1000));
            $(".xiaoji").html("￥"+Number(data[_me.arr[0]]["p_price"].match(/\d+/))*Number(_me.arr[1]));
            _me.jisuan();
        })
        $(".content").append("<div class='ale' style='display: none;'><div>警告框</div><div>确认删除？</div><div class='delsure'>删除</div><div class='quxiao'>取消</div></div>")

        $(".del").click(function(){
            $(".ale").show();
        })
        $(".delsure").click(function(){
            Cookie.deleteCookie("0010301","/");
            _me.createproduct();
            _me.jisuan();
            $(".ale").hide();
        })
        $(".quxiao").click(function(){
            $(".ale").hide();
            // alert(1)
        })
        $(".goback").click(function(){
            window.history.go(-1);
        })

    }

    this.createpublic();
    this.createproduct();
    this.jisuan();
}

