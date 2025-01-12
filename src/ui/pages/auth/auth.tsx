import React, {Component} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../feauteres/common/redux";
import {ViewCompClassVm, ViewCompClassVmInterface} from "./auth_vm";

export class AuthPage extends Component {
    vm = ViewCompClassVm.prototype

    componentWillUnmount() {
        this.vm.dispose()
    }

    render() {
        return <AuthView vm={this.vm}/>;
    }
}

const AuthView = ({vm}: ViewCompClassVmInterface): JSX.Element => {
    let state = useSelector((state: RootState) => state.authPageVmReducer)

    return (
        <div>
            <button onClick={() => vm.changeCount()}>
                Change count
            </button>

            <div>count = {state.count}</div>

            <button onClick={() => vm.changeName()}>
                Change name
            </button>

            <div>name = {state.name}</div>

            <button onClick={() => vm.getCart()}>
                Get cart api
            </button>
        </div>
    )
}