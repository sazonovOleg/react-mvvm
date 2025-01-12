import React, {Component} from 'react';
import './app.css';
import {Provider} from "react-redux";
import {store} from "../../feauteres/common/redux";
import {AuthPage} from "../pages/auth/auth";

class App extends Component {
    private store = store

    render() {
        return <div className="App">
          <Provider store={this.store}>
              <AuthPage/>
          </Provider>
        </div>
    }
}

export default App;
