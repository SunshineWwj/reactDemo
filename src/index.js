import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  Route,
  BrowserRouter,
  HashRouter,
  Link,
  Switch,
} from "react-router-dom";
import reducer from "./store/reducer";
import state from "./store/state";
import MenuPage from "./Menu";
import Hooks from '../src/homeHooks/index'
const store = createStore(reducer, state);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MenuPage />
          {/* <Hooks/> */}
        </BrowserRouter>
      </Provider>
    );
  }
}
ReactDom.render(<App />, document.getElementById("app"));
