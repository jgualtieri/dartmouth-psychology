/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { likeImages } from '../actions';

class ImagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      first: true,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      liked: [],
    };
    this.onPrevious = this.onPrevious.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onImageClicked = this.onImageClicked.bind(this);
  }
  onPrevious() {
    if (this.state.current === 2) {
      this.setState({
        current: 1,
        first: true,
        second: false,
      });
    } else if (this.state.current === 3) {
      this.setState({
        current: 2,
        second: true,
        third: false,
      });
    } else if (this.state.current === 4) {
      this.setState({
        current: 3,
        third: true,
        fourth: false,
      });
    } else if (this.state.current === 5) {
      this.setState({
        current: 4,
        fourth: true,
        fifth: false,
      });
    }
  }
  onNext() {
    if (this.state.current === 1) {
      this.setState({
        current: 2,
        first: false,
        second: true,
      });
    } else if (this.state.current === 2) {
      this.setState({
        current: 3,
        second: false,
        third: true,
      });
    } else if (this.state.current === 3) {
      this.setState({
        current: 4,
        third: false,
        fourth: true,
      });
    } else if (this.state.current === 4) {
      this.setState({
        current: 5,
        fourth: false,
        fifth: true,
      });
    }
  }
  onImageClicked(imageNum) {
    // const newSelected = this.state.selected;
    // newSelected.push(imageNum);
    // this.setState({ selected: newSelected });
    if (this.state.current === 5) {
      const newLiked = this.state.liked;
      newLiked.push(imageNum);
      this.setState({ liked: newLiked });
      // likeImages(this.state.liked);
      this.props.history.push({
        pathname: '/liked',
        state: { liked: this.state.liked },
      });
      // this.props.history.push('/liked');
    } else {
      // likeImage(imageNum);
      const newLiked = this.state.liked;
      newLiked.push(imageNum);
      this.setState({ liked: newLiked });
      this.onNext();
    }
  }
  render() {
    return (
      <div className="image-page">
        <div id="image-nav-bar">
          <div id="left-wrapper">
            <div className="icon-2">
              <img src="https://typeset-beta.imgix.net/rehost/2016/9/13/682091a6-4f41-47cd-936e-851fc13eb3a6.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70" alt="" />
            </div>
            <input id="search-bar" value="Boston, MA - Homes" type="text" />
          </div>
          <div id="fake-links">
            <div className="fake-link">Become a host</div>
            <div className="fake-link">Saved</div>
            <div className="fake-link">Trips</div>
            <div className="fake-link">Messages</div>
            <div className="fake-link">Credit</div>
            <div className="fake-link">Help</div>
          </div>
        </div>
        <div id="filter-bar">
          <div className="fake-filter">Home type</div>
          <div className="fake-filter">Price</div>
          <div className="fake-filter">Instant Book</div>
          <div className="fake-filter">Trip type</div>
          <div className="fake-filter">More filters</div>
        </div>
        <div id="images">
          { this.state.first ?
            <div id="page1">
              <div className="top-row">
                <div className="listing" onClick={() => this.onImageClicked(1)}>
                  <img src="https://i.imgur.com/uGOLtRl.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(2)}>
                  <img src="https://i.imgur.com/3ERs6Zi.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(3)}>
                  <img src="https://i.imgur.com/bHmCNtZ.png" alt="" />
                </div>
              </div>
              <div className="bottom-row">
                <div className="listing" onClick={() => this.onImageClicked(4)}>
                  <img src="https://i.imgur.com/YJD29aF.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(5)}>
                  <img src="https://i.imgur.com/xNinb5Z.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(6)}>
                  <img src="https://i.imgur.com/MVY1uiu.png" alt="" />
                </div>
              </div>
            </div>
          : null }
          { this.state.second ?
            <div id="page2">
              <div className="top-row">
                <div className="listing" onClick={() => this.onImageClicked(7)}>
                  <img src="https://i.imgur.com/5gZZp7L.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(8)}>
                  <img src="https://i.imgur.com/SglHXLW.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(9)}>
                  <img src="https://i.imgur.com/KG2xzl8.png" alt="" />
                </div>
              </div>
              <div className="bottom-row">
                <div className="listing" onClick={() => this.onImageClicked(10)}>
                  <img src="https://i.imgur.com/ahJWlfn.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(11)}>
                  <img src="https://i.imgur.com/fybdd3z.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(12)}>
                  <img src="https://i.imgur.com/tPAZ1Ce.png" alt="" />
                </div>
              </div>
            </div>
          : null }
          { this.state.third ?
            <div id="page3">
              <div className="top-row">
                <div className="listing" onClick={() => this.onImageClicked(13)}>
                  <img src="https://i.imgur.com/8ne7ZpQ.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(14)}>
                  <img src="https://i.imgur.com/6nRGvEO.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(15)}>
                  <img src="https://i.imgur.com/0ne8BU0.png" alt="" />
                </div>
              </div>
              <div className="bottom-row">
                <div className="listing" onClick={() => this.onImageClicked(16)}>
                  <img src="https://i.imgur.com/2MYr6pI.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(17)}>
                  <img src="https://i.imgur.com/P4vASFC.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(18)}>
                  <img src="https://i.imgur.com/J6MsLby.png" alt="" />
                </div>
              </div>
            </div>
          : null }
          { this.state.fourth ?
            <div id="page4">
              <div className="top-row">
                <div className="listing" onClick={() => this.onImageClicked(19)}>
                  <img src="https://i.imgur.com/F3MmY0z.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(20)}>
                  <img src="https://i.imgur.com/fq4GVht.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(21)}>
                  <img src="https://i.imgur.com/a1SpMlI.png" alt="" />
                </div>
              </div>
              <div className="bottom-row">
                <div className="listing" onClick={() => this.onImageClicked(22)}>
                  <img src="https://i.imgur.com/4gtUXGU.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(23)}>
                  <img src="https://i.imgur.com/U47epRN.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(24)}>
                  <img src="https://i.imgur.com/1IYN7HN.png" alt="" />
                </div>
              </div>
            </div>
          : null }
          { this.state.fifth ?
            <div id="page5">
              <div className="top-row">
                <div className="listing" onClick={() => this.onImageClicked(25)}>
                  <img src="https://i.imgur.com/aBnlwcd.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(26)}>
                  <img src="https://i.imgur.com/zcxQC8c.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(27)}>
                  <img src="https://i.imgur.com/56WuSQM.png" alt="" />
                </div>
              </div>
              <div className="bottom-row">
                <div className="listing" onClick={() => this.onImageClicked(28)}>
                  <img src="https://i.imgur.com/AVf11f5.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(29)}>
                  <img src="https://i.imgur.com/W1mHkOF.png" alt="" />
                </div>
                <div className="listing" onClick={() => this.onImageClicked(30)}>
                  <img src="https://i.imgur.com/yMfgK40.png" alt="" />
                </div>
              </div>
            </div>
          : null }
        </div>
        <div id="toggle-images" hidden>
          <button id="back-button" onClick={this.onPrevious}>Previous</button>
          <button id="next-button" onClick={this.onNext}>Next</button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { likeImages })(ImagePage));
