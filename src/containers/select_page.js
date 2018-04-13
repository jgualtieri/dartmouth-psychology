import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';

class SelectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      where: '',
    };
    this.onWhereChange = this.onWhereChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  onWhereChange(event) {
    this.setState({ where: event.target.value });
  }
  onSearch() {
    this.props.history.push('/images');
  }
  handleChange(event) {
    this.setState({ startDate: event.target.value });
  }
  render() {
    return (
      <div className="select-page">
        <div className="icon">&part;</div>
        <div id="select-container">
          <div id="select-title">
          Find places to stay in
          </div>
          <div id="select-title-cont">
          Boston
          </div>
          <div id="select-subtitle">
          Discover entire homes and private rooms perfect for any trip.
          </div>
          <div id="where-title">
          WHERE
          </div>
          <div id="where-input">
            <input onChange={this.onWhereChange}
              value="Boston" type="text" required
            />
          </div>
          <div id="date-wrapper">
            <div id="start-wrapper">
              <div id="start-date-title">
              CHECK IN
              </div>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
            <div id="end-wrapper">
              <div id="end-date-title">
              CHECK OUT
              </div>
              <DatePicker
                selected={this.state.endDate}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div id="adults-children-wrapper">
            <div id="adults-wrapper">
              <div id="adults-title">
              ADULTS
              </div>
              <input onChange={this.onWhereChange}
                value="1 Adult" type="text" required
              />
            </div>
            <div id="children-wrapper">
              <div id="children-title">
              CHILDREN
              </div>
              <input onChange={this.onWhereChange}
                value="No Children" type="text" required
              />
            </div>
          </div>
          <button id="search-button" onClick={this.onSearch}>Search</button>
          <div id="arrows">
          United States &gt; Massachusetts &gt; Boston
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(SelectPage));
