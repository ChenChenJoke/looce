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
			if(parseInt($child.outerHeight())>parseInt(parentHeight)*2){
				$child.text(content.substring(0,(content.length)/2)+"...");
			}else{
				i+=1;
				j = 6+i;
				$child.text(content.substring(0,content.length-j)+"...");
			}
		};
	});
}

