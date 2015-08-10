var React = require('react');
var ReactNotify = require('../index');

var App = React.createClass({
	duration: function() {
		return Math.round(Math.random() * 9) * 1000;
	},
	show: function() {
		var r = Math.round(Math.random() * 2);
		var arr = ['success', 'info', 'error'];

		this.notification(arr[r]);
	},
	notification: function(notify) {
		var duration = this.duration();
		var body = "Message - " + notify + ' Duration: ' + duration;
		this.refs.notificator[notify]("Title - " + notify, body, duration);
	},
	render: function() {

		return (
				<div>
					<ReactNotify ref='notificator'/>
					<button onClick={this.show}> Show</button>
				</div>
		)
	}
});

React.render(<App/>, document.querySelector('body'));