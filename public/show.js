import ReactDom from 'react-dom';
import React, {Component} from 'react';
import ReactNotify from "react-notify";

export default class App extends Component {

  show() {
    const r   = Math.round(Math.random() * 2);
    const arr = ['success', 'info', 'error'];

    this.notification(arr[r]);
  }

  notification(notify) {
    const duration = Math.round(Math.random() * 9) * 1000;
    const body     = "Message - " + notify + ', Duration: ' + duration;
    this.refs.notificator[notify]("Title - " + notify, body, duration);
  }

  render() {

    return (
        <div>
          <ReactNotify ref='notificator'/>
          <button onClick={() => this.show()}> Show</button>
        </div>
    )
  }
}

ReactDom.render(<App/>, document.querySelector('#app'));