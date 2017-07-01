function t_shirt(){	

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
//	console.log(1);
	this.createpublic = function(){
		$(".header").load("../html/header.html");
		$(".footer").load("../html/footer.html");
		var _header = new header();

	}
	this.createleft = function(){
		
		$(".left_side").append("<img src='../images1/0.jpg'/><a href='###'><img src='../images1/1.jpg'/></a><a href='###'><img src='../images1/2.jpg'/></a>");
		$(".left_side").children().css({"float":"left"});
		$.getJSON("http://localhost:63342/Project/H5case/hlan/json/data.json",fx);
		function fx(data){
			this.nnn = 0;
			this._navlist = "";
			this._lilist = "";
			for(var k in data){
				if(k==3||k==4||k==12||k==13){
					this._navlist += "<li><a href=\"###\">"+data[k]["nav_name"]+"</a></li>";
				}
			}
			$(".left_side").append("<ul>"+this._navlist+"</ul>");
			for(var j in data){
				if(j==3||j==4||j==12||j==13){
					this.nnn++;
					this._lilist = "";
					for(m in data[j]["children"]){
					this._lilist +="<li><a href=\""+data[j]["children"][100+PrefixInteger(j, 2)+PrefixInteger(m, 2)]["href"]+"\">"+data[j]["children"][100+PrefixInteger(j, 2)+PrefixInteger(m, 2)]["name"]+"</a></li>"
						
					}
					$(".left_side>ul>li").eq(this.nnn-1).append("<ul>"+this._lilist+"</ul>");
				}
			}
		}
		$(".left_list").append("<div class='leftdi'><p>精品男鞋</p><p>81款可选/198-458元</p></div>")
	}
	this.createlist = function(){
//		this.list_p = "";
		$(".content").append("<div class='right_list'></div>");
		$(".right_list").append("<div class='title'>商品筛选</div>");
		$(".right_list").append("<div class='shaixuan'></div>");
		$(".right_list").append("<div class='list_content'></div>");
		$(".right_list").append("<div class='shaixuan'></div>");
		$.getJSON("http://localhost:63342/Project/H5case/hlan/json/data_p.json",fx);
		function fx(data){
			_me = this;
			var aaa = 0;
			this.createliebiao = function(){
				this.list_p ="";
//				console.log(aaa)
				for(var k in data){
//					console.log(typeof k.slice(0,3))
					if(k>=PrefixInteger1(1+40*aaa, 3)+"0301"&&k<PrefixInteger1((41+40*aaa), 3)+"0301"){
//						console.log(typeof k)
//						console.log(k)
						this.list_p += "<div class='product'><a target='_blank' href='"+data[k]["p_href"]+"'><img src='../images1/"+data[k]["p_main"]+"'/></a><p><a target='_blank' href='"+data[k]["p_href"]+"'>"+data[k]["p_name"]+"</a></p><p><a target='_blank' href='"+data[k]["p_href"]+"'><span>售价</span><span>"+data[k]["p_price"]+"</span></a></p></div>";
						
					}			
				}
//				console.log(this.list_p)
				$(".list_content").html(this.list_p);
			}
			this.createliebiao();
			

//			console.log(getJsonLength(data))

			this.createsubfield = function(){
				var page = Math.ceil(getJsonLength(data)/40);
				var proHtml = "";
				var nextHtml = "";
				var page_listHtml = "";

				if(aaa<1){
					proHtml = "<span class='pro_no'>上一页</span>";
				}else{
					proHtml = "<a href='###' class='pre_btn'>上一页</a>"
				}

				if(aaa>page-2){
					nextHtml = "<span class='next_no'>下一页</span>"
				}else{
					nextHtml = "<a href='###' class='next_btn'>下一页</a>"
				}

				if(aaa<1){
//					console.log(1);
					page_listHtml = "<span>"+(aaa+1)+"</span><a href='###' class='page_btn'>2</a><a href='###' class='page_btn'>3</a>";
				}else if(aaa>page-2){
					page_listHtml = "<a href='###' class='page_btn'>"+aaa+"</a><span>"+(aaa+1)+"</span>";
				}else if(aaa==page-2){
					page_listHtml = "<a href='###' class='page_btn'>"+(aaa)+"</a><span>"+(aaa+1)+"</span><a href='###' class='page_btn'>"+(aaa+2)+"</a>"
				}else{
					page_listHtml = "<a href='###' class='page_btn'>"+aaa+"</a><span>"+(aaa+1)+"</span><a href='###' class='page_btn'>"+(aaa+2)+"</a><a href='###' class='page_btn'>"+(aaa+3)+"</a>"
				}
				
				var amount = 40*(aaa+1)
				if(amount>getJsonLength(data)){
					amount=getJsonLength(data);
				}
				$(".shaixuan").html("当前产品"+(amount-39)+"~"+amount+"件&nbsp;&nbsp;共274件商品"+page_listHtml + proHtml + nextHtml)
				$(".next_btn").click(function(){
					aaa++;
//					console.log(aaa)
					_me.createsubfield();
					_me.createliebiao();
				})
				$(".pre_btn").click(function(){
					aaa--;
					_me.createsubfield();
					_me.createliebiao();
				})
				$(".page_btn").click(function(){
					aaa = this.innerHTML - 1;
					_me.createsubfield();
					_me.createliebiao();
				})
			}
			
			
			this.createsubfield();
		
			
			
			
//			console.log(140301<400301)
//			console.log
			
		}
		
		
//		this.test = "";
//		for(var i=0;i<3;i++){
//			this.test += "a";
//			console.log(this.test)
//		}

//		this.test1 = "333";
//		this.test2 = 004;
//		this.test3 = this.test2+this.test1;
//		console.log(PrefixInteger1(38, 3))
//		console.log(typeof PrefixInteger1(38, 3))
	}
	
	
	
	
	
	
	
	
	
}

function main(){
	var _t_shirt = new t_shirt();
	_t_shirt.createpublic();
	_t_shirt.createleft();
	_t_shirt.createlist();
}


window.onload = main;
