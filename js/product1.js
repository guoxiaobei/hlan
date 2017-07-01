function product(){
	function PrefixInteger(num, length) {  
			return ( "0000000000000000" + num ).substr( -length );  
	} 
	function PrefixInteger1(num, length) {  
			return ( "0000000000000000" + num+"" ).substr( -length );  
	} 
	function getJsonLength(jsonData){
		var jsonLength = 0;
		for(var item in jsonData){
			jsonLength++;
		}
		return jsonLength;
	}
	var	_data ;

	$.post("../PhpInterface3/login.php",function(data){
		console.log(data);
	})







    /**
	 * 创建公共样式
     */
	this.createpublic = function(){
		$(".header").load("../html/header.html");
		$(".footer").load("../html/footer.html");
		var _header = new header();
	}

    /**
	 * 获取json数据
     */
	$.getJSON("http://localhost:63342/Project/H5case/hlan/json/data_p.json",fx);
	function fx(data){
		var smallpic = "";
		var bigpic = "";

        /**
		 * 创建放大镜
         */
		this.createmagnifier = function(){
			for( var k in data["0010301"]["p_smallpic"] ){
//				console.log(data["0010301"]["p_smallpic"][k])
				smallpic += "<img src='../images3/"+data["0010301"]["p_smallpic"][k]+".jpg'/>"
			}
			$(".magnifier").append("<div class='mainpic'><img src='../images3/"+data["0010301"]["p_smallpic"][0]+".jpg'/></div><div class='smallpiclist'><img class='fl' src='../images3/1.jpg'/><div class='smallpic fl'>"+smallpic+"</div><img class='fr' src='../images3/7.jpg'/></div>")
		}
        /**
		 * 创建购买框
         */
		this.createbuy = function(){
			$(".buy h3").html(data["0010301"]["p_name"]).css({
				"font-size":"14px",
				"padding-left":"10px",
				"height":"20px",
				"line-height":"20px",
				"padding-bottom":"10px"
			});
			$(".buy p").html(data["0010301"]["p_number"]).css({
				"font-size":"12px",
				"height":"20px",
				"line-height":"20px",
				"color":"#aaa",
				"padding-left":"10px",
				"padding-bottom":"10px"
			});
			$(".buy .price div").eq(1).html(data["0010301"]["p_price"]).css({
				"font-size":"18px",
				"color":"red"
			});
			var num = 1;
			$(".jia").click(function(){
				num++;
				$(".shuliang").html(num)
			})
            $(".jian").click(function(){
                num--;
                if(num<1){
                	num = 1;
				}
                $(".shuliang").html(num)
            })
            /**
			 * cookie
             */
			$(".tocar").click(function(){
                Cookie.setCookie("0010301",num,"/",new Date(new Date().getTime()+7*24*3600*1000));
                var arr = Cookie.readCookie().split("=");
				$(".buy").append("<div class='tan'><img class='fl' src='../promotion_img/11.png'/><div class='fl'><p>该商品以成功放入购物袋</p><p>购物袋共<span> "+arr[1]+" </span>件商品 合计：<span> "+Number(data[arr[0]]["p_price"].match(/\d+/))*Number(arr[1])+" </span>元</p><p><a href='http://localhost:63342/Project/H5case/hlan/html/cart.html'>去结算</a><a href='http://localhost:63342/Project/H5case/hlan/html/product1.html'>继续购物</a></p></div> </div>")

			})

		}

        /**
		 * 创建详情图
         */
		this.createviews = function(){
			for(var k in data["0010301"]["P_bigpic"]){
				bigpic += "<img src='../images3/"+(data["0010301"]["P_bigpic"][k]+8)+".jpg'/>"
			}
			$(".view").append(bigpic)
		}

        /**
		 * 创建放大镜内部
         */
		this.jsMagnifier = function(){	
			$(".magnifier").append("<div class='magnify'></div>")
			$(".magnify").html("<img src='../images3/2.jpg'/>");
			$(".smallpic>img").eq(0).css({
				"border":"2px solid rgb(255,102,0)",
				"padding":"1px"
			})
			$(".smallpic>img").mouseenter(function(){
				$(".smallpic>img").css({
					"padding":"2px",
					"border":"1px solid #ccc"
				})
				$(this).css({
					"border":"2px solid rgb(255,102,0)",
					"padding":"1px"
				})
				$(".mainpic").html("<img src='../images3/"+($(this).index()+2)+".jpg'/><div style='display: none;' class='zhezhao'></div>");
				$(".magnify").html("<img src='../images3/"+($(this).index()+2)+".jpg'/>");
			})
			$(".mainpic").append("<div style='display: none;' class='zhezhao'></div>");
			$(".mainpic").mouseenter(function(){
                $(".zhezhao").show();
				$(".mainpic").mousemove(function(e){
					var e = e || window.event;
//					console.log(e.clientX)
//					console.log($(".mainpic").offset().left)
//					console.log($(".mainpic").scrollTop())
//					console.log($(".mainpic").offset().top)
//					console.log(e.clientY)
					var _left = 2*(e.clientX-$(".mainpic").offset().left-100);
					var _top = 2*(e.clientY+$("body").scrollTop()-$(".mainpic").offset().top-100);
					if(_left<0){
						_left = 0;
					}
					if(_left>400){
						_left = 400;
					}
					if(_top<0){
						_top = 0;
					}
					if(_top>400){
						_top = 400;
					}
					$(".zhezhao").css({
						"left":_left/2+"px",
						"top":_top/2+"px"
					}) 
//					console.log(_left/2)
//					console.log(_top/2)
					$(".magnify").show().children("img").css({
						"left":_left*-1+"px",
						"top":_top*-1+"px"
					})
				})
			})
			$(".mainpic").mouseleave(function(){
				$(".magnify").hide();
				$(".zhezhao").hide();
			})
		}
		this.createmagnifier();
		this.createbuy();
		this.createviews();
		this.jsMagnifier();
	}

    /**
	 * 创建左侧边栏
     */
	this.createleft = function(){
		$(".left_side").append("<img src='../images1/0.jpg'/><a href='###'><img src='../images1/1.jpg'/></a><a href='###'><img src='../images1/2.jpg'/></a>");
		$(".left_side").children().css({"float":"left"});
		$.getJSON("http://localhost:63342/Project/H5case/hlan/json/data.json",fn);
		function fn(data1){
			this.nnn = 0;
			this._navlist = "";
			this._lilist = "";
			for(var k in data1){
				if(k==3||k==4||k==12||k==13){
					this._navlist += "<li><a href=\"###\">"+data1[k]["nav_name"]+"</a></li>";
				}
			}
			$(".left_side").append("<ul>"+this._navlist+"</ul>");
			for(var j in data1){
				if(j==3||j==4||j==12||j==13){
					this.nnn++;
					this._lilist = "";
					for(m in data1[j]["children"]){
					this._lilist +="<li><a href=\""+data1[j]["children"][100+PrefixInteger(j, 2)+PrefixInteger(m, 2)]["href"]+"\">"+data1[j]["children"][100+PrefixInteger(j, 2)+PrefixInteger(m, 2)]["name"]+"</a></li>"
						
					}
					$(".left_side>ul>li").eq(this.nnn-1).append("<ul>"+this._lilist+"</ul>");
				}
			}
		}
		$(".left_list").append("<div class='leftdi'><p>精品男鞋</p><p>81款可选/198-458元</p></div>")
	}

    /**
	 * 创建tab切换
     */
	this.tabmove = function(){
		$(".product_views_in>ul>li").click(function(){
			var _me = this;
//			console.log($(".product_views_in>div").eq($(_me).index()))
			
			$(".product_views_in>div").css({
				"display":"none"
			})
			$(".product_views_in>div").eq($(_me).index()).css({
				"display":"block"
			})
			$(".product_views_in>ul>li").css({
				"padding":"0 20px",
				"height":"18px",
				"line-height":"18px",
				"margin-top":"15px",
				"border-right":"1px solid #333",
				"border-top":"0",
				"border-left":"0",
				"margin-left":"0"
			})
			$(this).css({
				"border-top":"3px solid #f00",
				"border-left":"1px solid #f00",
				"margin-left":"-1px",
				"height":"48px",
				"line-height":"42px",
				"box-sizing":"border-box",
				"margin-top":"0",
				"border-color":"red",
			})
		})
	}

		

	
	
	
	
	
	this.createpublic();
	this.createleft();
	this.tabmove();

    // var k = 0;
    // for(var i=0;i<364 ;i++){
		// k+=2*i;
    // }
    // console.log(k)
}

window.onload = product;
