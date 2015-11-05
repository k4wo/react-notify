'use strict';
var React = require('react');


var Notify = React.createClass({
	displayName: "Notify",
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
		var key         = this.key++;
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
		var keys  = Object.keys(this.state);
		var state = this.state;
		var hide  = this.hideNotification;
		var el    = keys.map(function(key) {
			return React.createElement(Item, {
						id: key,
						key: key,
						theme: state[key].theme,
						hideNotification: hide,
						title: state[key].title,
						msg: state[key].msg
					}
			)
		});
		return (React.createElement("div", { className: "notify-container" }, el));
	}
});

var Item = React.createClass({
	displayName: "Item",
	hideNotification: function() {
		this.props.hideNotification(this.props.id);
	},
	render: function() {
		return (
				React.createElement("div", { className: "notify-item " + this.props.theme, onClick: this.hideNotification },
						React.createElement("p", { className: "notify-title" }, this.props.title),

						React.createElement("p", { className: "notify-body" }, this.props.msg)
				)
		)
	}
});
module.exports = Notify;
