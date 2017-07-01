function banner(){
	
//	console.log($(".banner").children().innerWidth())
	$.getJSON("json/data.json",fn);
	function fn(data){
		this.createimg = function(){
			$(".banner").append("<div id=\"span_list\"></div>")
			for(k in data[14]["children"]){
//				console.log(1);
				$(".banner").append("<a href=\"###\"><img src="+data[14]["children"][k] +" /></a>");
				$("#span_list").append("<span class=\"span\"></span>")
			}
			$(".banner").append("<div id=\"banner_left\">&lt</div><div id=\"banner_right\">&gt</div>");
			
		}
		this.Css = function(){
			setTimeout(function(){
//					console.log($(".banner").children("a").children("img").innerWidth());
//					console.log($("body").innerWidth());
				$(".banner>a>img").css({
					"margin-left":-($(".banner>a>img").innerWidth()-$("body").innerWidth())/2+"px"
				})
				$(".banner").mouseenter(function(){
					$("#banner_left").css({
						"opacity":"1",
						"left":"100px"
					})
					$("#banner_right").css({
						"opacity":"1",
						"right":"100px"
					})
				})
				$(".banner").mouseleave(function(){
					$("#banner_left").css({
						"opacity":"0",
						"left":"140px"
					})
					$("#banner_right").css({
						"opacity":"0",
						"right":"140px"
					})
				})
				
			},300)
			$("#span_list").css({
				"left":($("body").innerWidth()-$("#span_list").innerWidth())/2+"px"
			})
		}
		
		this.move = function(){
			this.num=0;
			var _me = this;
			setTimeout(function(){
//				console.log($("#span_list").children("span").length)
					var cleanstyle = function(){
						for(var i=0;i<$(".banner").children("a").children("img").length;i++){
							$(".banner").children("a").children("img").eq(i).css({"display":"none"});
							$("#span_list").children("span").eq(i).css({"background":"none"})
						}
					}
					var block = function(){
						$(".banner").children("a").children("img").eq(_me.num).css({"display":"block"});
						$("#span_list").children("span").eq(_me.num).css({"background":"yellow"})
					}
					$("#banner_right").on("click",function(){
						if(_me.num>=$(".banner").children("a").children("img").length-1){
							_me.num = -1;
						}
						_me.num++;
//						console.log(_me.num)
						cleanstyle();
						block();
					})
					$("#banner_left").on("click",function(){
						if(_me.num<0){
							_me.num = $(".banner").children("a").children("img").length-1;
						}
						_me.num--;
						cleanstyle();
						block();
					})
					for(var j=0;j<$("#span_list").children("span").length;j++){

						
						$("#span_list span").eq(j).on("mouseenter", function(){
						_me.num = $(this).index()
//							console.log(this.index)
							cleanstyle();
							block();
						})
					}
					var lunbo = function(){
						clearTimeout(_me.timer);
						if(_me.num>=$(".banner").children("a").children("img").length-1){
							_me.num = -1;
						}
						_me.num++;
						cleanstyle();
						block();
//						console.log(1);
						setTimeout(lunbo,4000)
					}
					lunbo();
			},300)
		}
		this.createimg();
		this.Css();
		this.move();
	}
}
