# ReactNotify

## ** [You can see demo here](http://k4wo.github.io/react-notify/public/) **

Module of React that shows notifications / warnings. Just pass three arguments and it's all.
* Title
* Message (body)
* Duration (in ms)

You can use three type of notification - *success*, *info*, *error*. You can set different appearance to each notification by css.  

```javascript
var React = require('react');
var ReactNotify = require('react-notify');

React.createClass({

showNotification: function() {
  //this.refs.notificator.error("Title.", "Msg - body.", duration);
  //this.refs.notificator.info("Title.", "Msg - body.", duration);
  this.refs.notificator.success("Title.", "Msg - body.", 4000);
},

render: function() {
		return (
				<div>
					<ReactNotify ref='notificator'/>
				</div>
		);
}
});
```
# css

You can set appearance by css. For example it may looks like this.
```css
.notify-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
  position: absolute;
  top: 0;
  right: 0;
}

.notify-item {
  width: 250px;
  margin: 5px 10px;
  color: #FFF;
  border-radius: 5px;
}

.notify-item:hover {
  opacity: 0.8;
  box-shadow: 0 0 10px 0 rgb(15, 15, 15);
}

.notify-item > p {
  font-family: 'Lora', serif;
  margin: 10px;
  opacity: .8;
}

.notify-item.success {
  background-color: rgba(81, 163, 81, 0.4);
}

.notify-item.error {
  background-color: rgba(203, 100, 94, 0.8);
}

.notify-item.info {
  background-color: rgba(33, 150, 243, 0.8);
}

.notify-title {
  font-weight: 700;
}
```
