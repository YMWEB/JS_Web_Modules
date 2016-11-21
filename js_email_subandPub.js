/*this is the pub/sub*/

var EventBus = {
	topics:{};
	subscribe:function(topic,listener){
		if(!this.topics[topic])
			this.topics[topic]=[];
			this.topics[topic].push(listener);
	},
	publish:function(topic,data){
		if(!this.topics[topic]||this.topics[topic].length<1)return;
		this.topics[topic].forEach(function(listener){
			listener(data||{});
		})
	}
}

var Mailer = function(){
	EventBus.subscribe('order/new',this.sendPurchaseEmail);
}

Mailer.prototype = {
	sendPurchaseEmail:function(userEmail){
		console.log('sent email to '+ userEmail)
	}
}

var Order = function(params){
	this.params = params;
}

Order.prototype = {
	saveOrder:function(){
		EventBus.publish('order/new',this.params.userEmail);
	}
}

var mail = new Mailer();
var order = new Order({userEmail:'test@test.com'});
order.saveOrder();
