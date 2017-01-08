function multiSelector(ul){
	this.multiselect = true;
}
multiSelector.prototype.create = function(){
	var $this = $(this);
	var checkboxNode = $('<div class="checkbox"></div>');
	$.each($this.find('li'),function(i,item){
		checkboxNode.prependTo($(item));
	})
}
multiSelector.prototype.check = function(){
	var $this = $(this);
	$this.on('click','li',function(){
		$that = $(this);
		$that.firstChild.
	})
}
multiSelector.prototype.uncheck = function(){

}