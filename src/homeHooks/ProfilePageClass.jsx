/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
import React from 'react';

class ProfilePage extends React.Component {
  //此方式可以解决 this总是拿到最新数据的问题
  showMessage = user => {
      alert(`Followed ${user}`);
  };

  handleClick = () => {
      const {user} = this.props;
      setTimeout(() => this.showMessage(user), 3000);
  };
  //   showMessage = () => {
  //     alert("Followed " + this.props.user);
  //   };

  //   handleClick = () => {
  //     setTimeout(() => this.showMessage(), 3000);
  //   };
  render() {
      return <button onClick={this.handleClick}>Follow</button>;
  }
}

export default ProfilePage;
