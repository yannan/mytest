$(function(){
	var index=0;
	var login_banner_li=$(".banList li");
	var len=login_banner_li.length;
	var btn_group_span=$(".btn_group span");
	opacity_change(index);
	var set_time=setInterval(function(){
		opacity_change(index);
		index++;
	},6000);
	btn_group_span.each(function(i){	
		$(this).click(function(){
			clearInterval(set_time);
			login_banner_li.each(function(j){
				if(i==j){
					clearInterval(set_time);
					$(this).animate({opacity:1},1000);
				}else{
					set_time;
					$(this).animate({opacity:0},1000);
				}
			});
			btn_group_span.each(function(){
				$(this).removeClass("active");
			});
			$(this).addClass("active");
			
			index=i;
			set_time=setInterval(function(){
				opacity_change(index);
				index++;
			},2000);
		});
	});	
});
function opacity_change(_index){
	$(".banList li").each(function(i){
		if(i==_index%3){
			$(this).animate({opacity:1},3000);
		}else{
			$(this).animate({opacity:0},3000);
		}
	});
	$(".btn_group span").each(function(j){
		if(_index%3==j){
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
		}
	});
} 