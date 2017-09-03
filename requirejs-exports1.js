exports.define = {
	topic: 'my export',
	desc: 'this is other way to define',
	sayHello() {
		console.log('topic' + this.topic + this.desc)
	}
}