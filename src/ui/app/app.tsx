import React, {Component} from 'react';
import './app.css';
import {Provider} from "react-redux";
import {store} from "../../feauteres/common/redux";
import {AuthPageView} from "../pages/auth/auth";

class App extends Component {
    private store = store

    render() {
        return <div className="App">
          <Provider store={this.store}>
              <AuthPageView/>
          </Provider>
        </div>
    }
}

export default App;
