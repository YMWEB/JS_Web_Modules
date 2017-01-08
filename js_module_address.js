// var Address = (function(){
// 	function addressPicker(provinceSel,datas){
// 		this.provinceSel = provinceSel;
// 		this.datas = datas;
// 		this.citySel = document.createElement('select');
// 		this.citySel.setAttribute('id','city');
// 		document.body.appendChild(this.citySel)
// 		this.townSel = document.createElement('select');
// 		this.townSel.setAttribute('id','town');
// 		document.body.appendChild(this.townSel)

// 	}
// 	addressPicker.prototype.init = function(){
// 		var opts=[];
// 		for(var i=0;i<this.datas.length;i++){
// 			opts.push(this.datas[i].name);
// 		}
// 		this.resetSelect(this.provinceSel,opts)
// 	}

// 	addressPicker.prototype.resetSelect = function(select,opts){
// 		emptySelectNode(select);
// 		for(var i =0;i<opts.length;i++){
// 			var optionNode = document.createElement('option');
// 			optionNode.text = opts[i];
// 			optionNode.value = opts[i];
// 			select.add(optionNode,null);
// 		}
// 		return select;
// 	}

// 	addressPicker.prototype.change = function(){
// 		var that = this;
// 		that.provinceSel.addEventListener('change',function(){	
// 			var name = this.value;	
// 			var options = getCity(name,that.datas).opts	
// 			var newSel = that.resetSelect(that.citySel,options)			
// 			// that.provinceSel.parentNode.appendChild(newSel)
// 		})
// 		that.citySel.addEventListener('change',function(){
// 			var name = this.value;
// 			var options = getTown(name,that.provinceSel.value,that.datas)
// 			var newSel = that.resetSelect(that.townSel,options)
// 			// that.citySel.parentNode.appendChild(newSel)
// 		})

// 	}
// 	function emptySelectNode(node){
// 		var childNodes = node.childNodes;
// 		while(node.length>0){
// 			node.removeChild(childNodes[0])
// 		}
// 	}
// 	function getCity(name,dataArray){
// 		var opts = [];
// 		var city = [];	
// 			for(var i=0;i<dataArray.length;i++){
// 			if(dataArray[i].name ===name){
// 				for(var j = 0;j<dataArray[i].List.length;j++){
// 					opts.push(dataArray[i].List[j].name);
// 				}
// 				}
// 			}
// 			return {'opts':opts
// 				}			
// 	}
// 	function getTown(name,province,dataArray){		
// 		for(var i=0;i<dataArray.length;i++){
// 			if(dataArray[i].name ===province){
// 				for(var j = 0;j<dataArray[i].List.length;j++){
// 					if(dataArray[i].List[j].name===name){
// 						return dataArray[i].List[j].List
// 					}
// 				}
// 			}
// 		}
// 	}

// 	return{
// 		addressPicker:addressPicker
// 	}
// })()
var AddressModule = function(){
	var proData,cityData,townData,countyData,proContainer,cityContainer,townContainer,countyContainer;

}

AddressModule.prototype.events = function(){
	$('body').trigger('fireEvent');
}

function getData(container,fn){
	return fn(container);
}

function setData(container,fn){
	return fn(container);
}

$('body').on('fireEvent',function(){
	alert('123')
})



