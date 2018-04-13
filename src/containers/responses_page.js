import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ResponsesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="responses-page">
            This is the responses page.
      </div>
    );
  }
}

export default withRouter(connect(null, null)(ResponsesPage));
