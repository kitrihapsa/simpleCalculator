import React, {Component} from 'react';

class KeyPadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [
        {name: "CE", text: "CE"}, {name: "C", text: "C"}, {name: ".", text: "."},
        {name: "1", text: "1"}, {name: "2", text: "2"}, {name: "3", text: "3"},
        {name: "4", text: "4"}, {name: "5", text: "5"}, {name: "6", text: "6"},
        {name: "7", text: "7"}, {name: "8", text: "8"}, {name: "9", text: "9"},
        {name: "0", text: "0"}, {name: "(", text: "("}, {name: ")", text: ")"},
        {name: "x", text: "x"}, {name: "-", text: "-"}, {name: "=", text: "="},
        {name: "+", text: "+"}, {name: "÷", text: "÷"}
      ]
    }
  }
  render() {
    const {keys} = this.state
    return (
      <div>
        { keys.map((item, i) => 
          <button onClick={e => this.props.onClick(e.target.name)} name={item.name}>{item.text}</button>)
        }
      </div>
    );
  }
}

export default KeyPadComponent;
