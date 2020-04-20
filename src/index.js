import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

import Nav from "./nav";
import Main from "./main";

const styles = {
  container: {
    background: "white"
  }
};

const store = createStore(rootReducer);

const App = () => (
  <div style={styles.container}>
    <Nav />
    <Provider store={store}>
      <Main />
    </Provider>
  </div>
);

render(<App />, document.getElementById("root"));
