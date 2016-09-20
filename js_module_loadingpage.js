function LoadingPage(options){
	var defaults = {
		'content':'',
		'css':{
			'position':absolute,
			'opacity':1,
			'background':#000,
			'top':0px,
			'left':0px,
			'width':100%,
			'height':100%,
			'z-index':999,		
		}
	};
	defaults = $.extend(this.defaults,options);
	var ele = '<div id="loaddingpage"></div>';
	$(ele).html(defaults.content);
	$(ele).css(defaults.css);
	$(ele).insertAfter($('head'));

}
LoadingPage.prototype.remove = function(){
	$("#loadingpage").remove();
}

