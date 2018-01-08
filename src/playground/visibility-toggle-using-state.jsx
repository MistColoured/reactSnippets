import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class VisibilityToggleInterview extends Component {
  state = {
    visibility: false
  }
  handleToggle = () => {
    this.setState((prevState) => ({
      visibility: !prevState.visibility
    }))
  }
  render() {
    const { visibility } = this.state
    return (
      <div>
        <button onClick={this.handleToggle}>{visibility ? 'Hide' : 'Show'}</button>
        {visibility && <p>ZZ Top</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggleInterview />, document.getElementById('app'));
