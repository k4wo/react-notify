'use strict';
var React = require('react');
var MemoryNotify = React.createClass({
	key: 0,
	getInitialState: function() {
		return {};
	},
	success: function(title, msg, time) {
		this.addNotify(title, msg, time, 'success');
	},
	error: function(title, msg, time) {
		this.addNotify(title, msg, time, 'error');
	},
	info: function(title, msg, time) {
		this.addNotify(title, msg, time, 'info');
	},
	addNotify: function(title, msg, time, theme) {
		var key = this.key++;
		this.state[key] = { title: title, msg: msg, time: time, theme: theme };
		this.setState(this.state);
		this.countToHide(time, key);
	},
	countToHide: function(duration, key) {
		var that = this;
		setTimeout(function() {
			that.hideNotification(key);
		}, duration);
	},
	hideNotification: function(key) {
		delete this.state[key];
		this.setState(this.state);
	},
	render: function() {
		var keys = Object.keys(this.state);
		var state = this.state;
		var hide = this.hideNotification;
		var el = keys.map(function(key) {
			return <Notify id={key}
										 key={key}
										 theme={state[key].theme}
										 hideNotification={hide}
										 title={state[key].title}
										 msg={state[key].msg}
					/>
		});
		return (<div className="notify-container">{el}</div>);
	}
});
var Notify = React.createClass({
	hideNotification: function() {
		this.props.hideNotification(this.props.id);
	},
	render: function() {
		return (
				<div className={"notify-item "+this.props.theme} onClick={this.hideNotification}>
					<p className="notify-title">{this.props.title}</p>

					<p className="notify-body">{this.props.msg}</p>
				</div>
		)
	}
});
module.exports = MemoryNotify;
