/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LikedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: this.props.location.state.liked,
      visible: [false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false,
        false, false, false],
    };
    this.onImageClicked = this.onImageClicked.bind(this);
    this.state.liked.map((likedImage) => {
      const newVisible = this.state.visible;
      newVisible[likedImage - 1] = true;
      this.setState({
        visible: newVisible,
      });
    });
  }
  onImageClicked(imageNum) {
    console.log(this.state.liked);
    console.log(this.state.imageNum);
    this.state.liked.map((likedImage) => {
      if (likedImage !== imageNum) {
        const newVisible = this.state.visible;
        newVisible[likedImage - 1] = false;
        this.setState({
          visible: newVisible,
        });
      }
    });
  }
  render() {
    return (
      <div className="liked-page">
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
          Choose the best option to confirm your booking now!
        </div>
        <div id="images">
          { this.state.visible[0] ?
            <div className="listing" onClick={() => this.onImageClicked(1)}>
              <img src="https://i.imgur.com/uGOLtRl.png" alt="" />
            </div>
          : null }
          { this.state.visible[1] ?
            <div className="listing" onClick={() => this.onImageClicked(2)}>
              <img src="https://i.imgur.com/3ERs6Zi.png" alt="" />
            </div>
          : null }
          { this.state.visible[2] ?
            <div className="listing" onClick={() => this.onImageClicked(3)}>
              <img src="https://i.imgur.com/bHmCNtZ.png" alt="" />
            </div>
          : null }
          { this.state.visible[3] ?
            <div className="listing" onClick={() => this.onImageClicked(4)}>
              <img src="https://i.imgur.com/YJD29aF.png" alt="" />
            </div>
          : null }
          { this.state.visible[4] ?
            <div className="listing" onClick={() => this.onImageClicked(5)}>
              <img src="https://i.imgur.com/xNinb5Z.png" alt="" />
            </div>
          : null }
          { this.state.visible[5] ?
            <div className="listing" onClick={() => this.onImageClicked(6)}>
              <img src="https://i.imgur.com/MVY1uiu.png" alt="" />
            </div>
          : null }
          { this.state.visible[6] ?
            <div className="listing" onClick={() => this.onImageClicked(7)}>
              <img src="https://i.imgur.com/5gZZp7L.png" alt="" />
            </div>
          : null }
          { this.state.visible[7] ?
            <div className="listing" onClick={() => this.onImageClicked(8)}>
              <img src="https://i.imgur.com/SglHXLW.png" alt="" />
            </div>
          : null }
          { this.state.visible[8] ?
            <div className="listing" onClick={() => this.onImageClicked(9)}>
              <img src="https://i.imgur.com/KG2xzl8.png" alt="" />
            </div>
          : null }
          { this.state.visible[9] ?
            <div className="listing" onClick={() => this.onImageClicked(10)}>
              <img src="https://i.imgur.com/ahJWlfn.png" alt="" />
            </div>
          : null }
          { this.state.visible[10] ?
            <div className="listing" onClick={() => this.onImageClicked(11)}>
              <img src="https://i.imgur.com/fybdd3z.png" alt="" />
            </div>
          : null }
          { this.state.visible[11] ?
            <div className="listing" onClick={() => this.onImageClicked(12)}>
              <img src="https://i.imgur.com/tPAZ1Ce.png" alt="" />
            </div>
          : null }
          { this.state.visible[12] ?
            <div className="listing" onClick={() => this.onImageClicked(13)}>
              <img src="https://i.imgur.com/8ne7ZpQ.png" alt="" />
            </div>
          : null }
          { this.state.visible[13] ?
            <div className="listing" onClick={() => this.onImageClicked(14)}>
              <img src="https://i.imgur.com/6nRGvEO.png" alt="" />
            </div>
          : null }
          { this.state.visible[14] ?
            <div className="listing" onClick={() => this.onImageClicked(15)}>
              <img src="https://i.imgur.com/0ne8BU0.png" alt="" />
            </div>
          : null }
          { this.state.visible[15] ?
            <div className="listing" onClick={() => this.onImageClicked(16)}>
              <img src="https://i.imgur.com/2MYr6pI.png" alt="" />
            </div>
          : null }
          { this.state.visible[16] ?
            <div className="listing" onClick={() => this.onImageClicked(17)}>
              <img src="https://i.imgur.com/P4vASFC.png" alt="" />
            </div>
          : null }
          { this.state.visible[17] ?
            <div className="listing" onClick={() => this.onImageClicked(18)}>
              <img src="https://i.imgur.com/J6MsLby.png" alt="" />
            </div>
          : null }
          { this.state.visible[18] ?
            <div className="listing" onClick={() => this.onImageClicked(19)}>
              <img src="https://i.imgur.com/F3MmY0z.png" alt="" />
            </div>
          : null }
          { this.state.visible[19] ?
            <div className="listing" onClick={() => this.onImageClicked(20)}>
              <img src="https://i.imgur.com/fq4GVht.png" alt="" />
            </div>
          : null }
          { this.state.visible[20] ?
            <div className="listing" onClick={() => this.onImageClicked(21)}>
              <img src="https://i.imgur.com/a1SpMlI.png" alt="" />
            </div>
          : null }
          { this.state.visible[21] ?
            <div className="listing" onClick={() => this.onImageClicked(22)}>
              <img src="https://i.imgur.com/4gtUXGU.png" alt="" />
            </div>
          : null }
          { this.state.visible[22] ?
            <div className="listing" onClick={() => this.onImageClicked(23)}>
              <img src="https://i.imgur.com/U47epRN.png" alt="" />
            </div>
          : null }
          { this.state.visible[23] ?
            <div className="listing" onClick={() => this.onImageClicked(24)}>
              <img src="https://i.imgur.com/1IYN7HN.png" alt="" />
            </div>
          : null }
          { this.state.visible[24] ?
            <div className="listing" onClick={() => this.onImageClicked(25)}>
              <img src="https://i.imgur.com/aBnlwcd.png" alt="" />
            </div>
          : null }
          { this.state.visible[25] ?
            <div className="listing" onClick={() => this.onImageClicked(26)}>
              <img src="https://i.imgur.com/zcxQC8c.png" alt="" />
            </div>
          : null }
          { this.state.visible[26] ?
            <div className="listing" onClick={() => this.onImageClicked(27)}>
              <img src="https://i.imgur.com/56WuSQM.png" alt="" />
            </div>
          : null }
          { this.state.visible[27] ?
            <div className="listing" onClick={() => this.onImageClicked(28)}>
              <img src="https://i.imgur.com/AVf11f5.png" alt="" />
            </div>
          : null }
          { this.state.visible[28] ?
            <div className="listing" onClick={() => this.onImageClicked(29)}>
              <img src="https://i.imgur.com/W1mHkOF.png" alt="" />
            </div>
          : null }
          { this.state.visible[29] ?
            <div className="listing" onClick={() => this.onImageClicked(30)}>
              <img src="https://i.imgur.com/yMfgK40.png" alt="" />
            </div>
          : null }
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(LikedPage));
