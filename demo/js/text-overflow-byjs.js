function tob(parent){
	dom = parent?parent.find(".text-overflow-byjs"):$(".text-overflow-byjs");
	dom.each(function(i){
		var parentHeight = $(this).height(),
			$children = $(this).children(),
			i=0,
			j=6,
			$child;
		switch($children.eq(0)[0].tagName){ 
			case "IMG" :$child = $children.eq(1);break;//解决图文混排问题,其他情况可以添加更多的case
			default :$child = $children.eq(0);
		}
		
		while($child.outerHeight() > parentHeight ) {
			//$child.text($child.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
			var content = $child.text();
			/*纵向切割*/
			if(parseInt($child.outerHeight())>parseInt(parentHeight)*2){//衰减算法测试黄金值
				$child.text(content.substring(0,(content.length)/2)+"...");
			}else if(parseInt($child.outerHeight())>parseInt(parentHeight)*1.5){
				$child.text(content.substring(0,content.length-content.length*0.4)+"...");
			}else if(parseInt($child.outerHeight())>parseInt(parentHeight)*1.3){
				$child.text(content.substring(0,content.length-content.length*0.2)+"...");
			/*横向切割*/
			}else if(content.lastIndexOf(" ")>-1){
				 $child.text(content.substring(0,content.lastIndexOf(" "))+"...");
			}else{
				i+=1;
				j = 6;
				$child.text(content.substring(0,content.length-j)+"...");
			}
		};
	});
}
