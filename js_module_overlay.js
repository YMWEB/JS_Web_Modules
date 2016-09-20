function OverLayer(options){
	var defaults = {
		'content':'',
		'css':{
			'position':absolute,
			'opacity':0.5,
			'background':#000,
			'top':0px,
			'left':0px,
			'width':100%,
			'height':100%,
			'z-index':999,
			'display':none,
			
		}
	};
	defaults = $.extend(this.defaults,options);
	var ele = '<div id="overlay"></div>'
	$(ele).html(defaults.content);
	$(ele).css(defaults.css);
	$(ele).appendTo($('body'));
}

OverLayer.prototope.show = function(){
	$("#overlay").show();
}
Overlayer.prototype.hide = function(){
	$("#overlay").remove();
}
