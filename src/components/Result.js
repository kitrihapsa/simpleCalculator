import React, {Component} from 'react';

class ResultComponent extends Component {
  render() {
    let {result} = this.props;
    return (
      <div className="result" style={{backgroundColor: '#884880'}}>
        <p>{result}</p>
      </div>
  )}
}


export default ResultComponent;

