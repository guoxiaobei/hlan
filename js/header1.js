function header(data){
	function PrefixInteger(num, length) {  
		return ( "0000000000000000" + num ).substr( -length );  
	}  
	$.getJSON("../json/data.json",fx);
	function fx(data){
		this._navlist = "";
		this._lilist = "";
		for(var k in data){
//			console.log(k);
			if(k<14){
				this._navlist += "<li><a target='_blank' href=\""+data[k]["href"]+"\">"+data[k]["nav_name"]+"</a></li>";
			}
		}
		$(".nav_list").html("<ul>"+this._navlist+"</ul>");

//		console.log($(".nav_list").children().children().eq(1).html())
		
		for(var j in data){
			if(j<14){
				this._lilist = "";
				for(m in data[j]["children"]){
				this._lilist +="<li><a target='_blank' href=\""+data[j]["children"][100+PrefixInteger(j, 2)+PrefixInteger(m, 2)]["href"]+"\">"+data[j]["children"][100+PrefixInteger(j, 2)+PrefixInteger(m, 2)]["name"]+"</a></li>"
					
				}
				$(".nav_list").children().children().eq(j-1).append("<ul>"+this._lilist+"</ul>");
				$(".nav_list").children().children().eq(j-1).children("ul").css({
					"margin-top":"24px",
					"display":"none",
					"z-index":"99"
				})
//				$(".nav_list").children().children().eq(j-1).children("ul").on("mouseenter",function(){
////					this.style.display = "block";
//					alert(1)
//				})
				$(".nav_list").children().children().eq(j-1).children("ul").children().css({
					"background":"#080162",
					"width":$(".nav_list").children().children().eq(j-1).innerWidth()*0.9+"px",
					"margin-left":$(".nav_list").children().children().eq(j-1).innerWidth()*0.05+"px"
				})
//			console.log(	$(".nav_list").children().children().eq(j-1).children("ul").children("li").innerWidth())
				$(".nav_list").children().children().eq(j-1).children("ul").children("li").children().css({
					"display":"block",
					"color":"#fff",
					"height":"27px",
					"line-height":"27px",
					"font-size":"12px",
					"border-bottom":"1px solid #fff",
					"text-align":"center",
					"width":$(".nav_list").children().children().eq(j-1).children("ul").children("li").innerWidth()-10+"px",
					"margin-left":"5px",
				})
				$(".nav_list").children().children().eq(6).children("ul").children("li").children().css({
					"width":$(".nav_list").children().children().eq(6).children("ul").children("li").innerWidth()+"px",
					"margin-left":"0px"
				})
				$(".nav_list").children().children().eq(5).children("ul").children("li").children().css({
					"width":$(".nav_list").children().children().eq(5).children("ul").children("li").innerWidth()+"px",
					"margin-left":"0px"
				})
				$(".nav_list").children().children().eq(8).children("ul").children("li").children().css({
					"width":$(".nav_list").children().children().eq(8).children("ul").children("li").innerWidth()+"px",
					"margin-left":"0px"
				})
				$(".nav_list").children().children().eq(9).children("ul").children("li").children().css({
					"width":$(".nav_list").children().children().eq(9).children("ul").children("li").innerWidth()+"px",
					"margin-left":"0px"
				})
//				$(".nav_list").children().children().eq(k).html()
			}
//			console.log(this._lilist)
		}
		var liebiao = $(".nav_list").children().children();
//		console.log(liebiao)
		for(var i=0;i<liebiao.length;i++){
			liebiao[i].onmouseover = function(){
				this.children[1].style.display = "block";
			}
			liebiao[i].onmouseout = function(){
				this.children[1].style.display = "none";
			}
		}


	}
		
}

