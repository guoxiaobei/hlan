function hlan(){
	var _me = this;
	this.createad = function(){
		$(".content").append("<div class='ad wrap'><a href=\"###\"><img src=\"images/9.jpg\"/></a></div>")
	}
	this.createad1 = function(){
		$(".content").append("<div class='ad1 wrap'><a href=\"html/promotion.html\"><div><img src=\"images/10.jpg\"/></div></a></div>")
	}
	this.creategood = function(){
		this.list = "";
		for(var i=0;i<8;i++){
			this.list+="<a href=\"###\"><img src=\"images/"+(i+12)+".jpg\"/></a>"
		}
//		console.log(this.list)
		$(".content").append("<div class='good wrap'><div><img src='images/11.jpg'/></div><div>"+this.list+"</div></div>")
	}
	this.createchao = function(){
		this.list = "";
		for(var i=0;i<4;i++){
			this.list+="<a href=\"###\"><img src=\"images/"+(i+22)+".jpg\"/></a>"
		}
		$(".content").append("<div class='chao wrap'><div><img src='images/20.jpg'/></div><div><a href=\"###\"><img src=\"images/21.jpg\"/></a></div><div>"+this.list+"</div></div>")
	}
	this.creategan = function(){
		this.list = "";
		for(var i=0;i<4;i++){
			this.list+="<a href=\"###\"><img style='margin-bottom:3px;' src=\"images/"+(i+28)+".jpg\"/></a>"
		}
		$(".content").append("<div class='chao wrap'><div><img src='images/26.jpg'/></div><div><a href=\"###\"><img src=\"images/27.jpg\"/></a></div><div>"+this.list+"</div></div>")
	}
	this.createjihe = function(){
		this.num = 32;
		for(var i=0;i<9;i++){
		this.list = "";
			for(var j=0;j<8;j++){
				this.list+="<a href=\"###\"><img src=\"images/"+(j+this.num+1)+".jpg\"/></a>"
			}
			$(".content").append("<div class='jihe wrap'><div><img src='images/"+this.num+".jpg'/></div><div>"+this.list+"</div></div>")
			this.num = this.num+9;
		}
	}
	this.createdi = function(){
		this.list = "";
		this.index = 0;
		for(var i=0;i<8;i++){
			this.list+="<a href=\"###\"><img src=\"images/"+(2*i+113)+".jpg\"/><img src=\"images/"+(2*i+114)+".jpg\"/></a>"
		}
		$(".content").append("<div class='di wrap'>"+this.list+"</div></div>");
		$(".di a").mouseenter(function(){
			$(this).children("img").eq(1).css({
				"top":"103px"
			})
		})
		$(".di a").mouseleave(function(){
			$(this).children("img").eq(1).css({
				"top":"140px"
			})
		})
		
	}
	this.createdilist = function(){
		function PrefixInteger(num, length) {  
			return ( "0000000000000000" + num ).substr( -length );  
		}  
		$.getJSON("json/data.json",fm);
		function fm(data){
			this.list = "";
			this.lilist = "";
			for(var k in data){
				if(k==2||k==3||k==4||k==12||k==13||k==15){
					this.list += "<li><a href=\"###\">"+data[k]["nav_name"]+"</a></li>";
				}
			}
			$(".content").append("<div style='background:#0e2360'><div class='wrap dilist'><ul class='dilistul'>"+this.list+"</ul></div></div>");
			this.index = 0;
			for(j in data){
				if(j==2||j==3||j==4||j==12||j==13||j==15){
					
					this.lilist = "";
					for(var m in data[j]["children"]){
					this.lilist +="<li><a href=\"###\">"+data[j]["children"][100+PrefixInteger(j, 2)+PrefixInteger(m, 2)]["name"]+"</a></li>";
						
					}
					$(".dilistul>li").eq(this.index).append("<ul class='dilist_in'>"+this.lilist+"</ul>");
					this.index++;
				}
			}
		$(".dilist").append("<div class='fr' style='padding:20px 20px 0 0 ;'><a href='###'><img class='diimg' src='images/129.jpg'/></a><div class='disearch'><input class='txt' type='text' placeholder='春季新品'/><input class='btn' type='button' value='搜本店'/></div></div>")
			
		}
//		console.log($(".dilist"))

	}
	this.createdilogo = function(){
		$(".content").append("<div class='wrap'><a class='dilogo' href='###'><img src='images/130.jpg'/></a></div>")
	}
	this.createdihelp = function(){
		$(".content").append("<div class='wrap'><p class='dihelp'><a id='totop' href='###'>返回顶部</a> | <a href='###'>帮助中心</a></p></div>")
	}
	
	this.totop = function(){
		function top(){
			clearTimeout(timer);
			$("body").scrollTop($("body").scrollTop()-2000);
			var timer = setTimeout(top,30)
			if($("body").scrollTop()<=0){
				clearTimeout(timer);
			}
		}
		$("#totop").click(function(){
			top();
//			console.log($(window).scrollTop());
//			console.log($("body").scrollTop());
		})
	}
	
	this.createad();
	this.createad1();
	this.creategood();
	this.createchao();
	this.creategan();
	this.createjihe();
	this.createdi();
	this.createdilist();
	this.createdilogo();
	this.createdihelp();
	this.totop();
	

}


