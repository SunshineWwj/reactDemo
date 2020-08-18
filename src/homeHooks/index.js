/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReactDOM from 'react-dom';

import ProfilePageFunction from './ProfilePageFunction';
import ProfilePageClass from './ProfilePageClass';

export default class Index extends React.Component {
  state = {
      user: 'Dan',
  };
  render() {
      return (
          <>
              <label>
                  <b>Choose profile to view: </b>
                  <select
                      value={this.state.user}
                      onChange={e => this.setState({user: e.target.value})}>
                      <option value="Dan">Dan</option>
                      <option value="Sophie">Sophie</option>
                      <option value="Sunil">Sunil</option>
                  </select>
              </label>
              <h1>Welcome to {this.state.user}’s profile!</h1>
              <p>
                  <ProfilePageFunction user={this.state.user} />
                  <b> (function)</b>
              </p>
              <p>
                  <ProfilePageClass user={this.state.user} />
                  <b> (class)</b>
              </p>
              <p>Can you spot the difference in the behavior?</p>

              <h3 style={{color: 'red'}}>
                  <p>结论:</p>
          当使用 函数式组件 实现的 ProfilePage, 当前账号是 Dan 时点击 Follow
          按钮，然后立马切换当前账号到 Sophie，弹出的文本将依旧是 'Followed Dan'。
                  <p>
            当使用 类组件 实现的 ProfilePage, 弹出的文本将是 'Followed Sophie'：
                  </p>
              </h3>
          </>
      );
  }
}
