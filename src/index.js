import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import reducer from "./store/reducer";
import state from "./store/state";

import HomeIndex from "./homeHooks";
import BlogIndex from "./blog";
import ResumeIndex from "./resume";
import UserIndex from "./user";
import ReactRedux from "./ReactRedux";
import TablePanel from "./demo";
const store = createStore(reducer, state);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/resume">resume</Link>
            </li>
            <li>
              <Link to="/user">user</Link>
            </li>
            <li>
              <Link to="/reactRedux">react-redux</Link>
            </li>
            <li>
              <Link to="/demo">TableDemo</Link>
            </li>
          </ul>
          <div>
            {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
            <Switch>
              {/* exact */}
              <Route path="/home" component={HomeIndex} />
              <Route exact path="/blog" component={BlogIndex} />
              <Route exact path="/resume" component={ResumeIndex} />
              <Route exact path="/user" component={UserIndex} />
              <Route exact path="/reactRedux" component={ReactRedux} />
              <Route exact path="/demo" component={TablePanel} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
ReactDom.render(<App />, document.getElementById("app"));
