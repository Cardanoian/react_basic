const React = require('react');
const {Component} = React;

class WordRelay extends Component {
  state={
    word:'김지원',
    value:'',
    result:'',
  };
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChange}/>
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = WordRelay;