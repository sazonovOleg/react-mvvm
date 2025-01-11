import React, {Component} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../feauteres/common/redux";
import {ViewCompClassVm, ViewCompClassVmInterface} from "./auth_vm";

export class AuthPageView extends Component {
    vm = ViewCompClassVm.prototype

    componentWillUnmount() {
        this.vm.dispose()
    }

    render() {
        return <ViewCompTest vm={this.vm}/>;
    }
}

const ViewCompTest = ({vm}: ViewCompClassVmInterface): JSX.Element => {
    let state = useSelector((state: RootState) => state.authPageVmReducer)

    return (
        <div>
            <button onClick={() => vm.changeCount()}>click1
            </button>

            <div>count = {state.count}</div>

            <button onClick={() => vm.changeName()}>click2
            </button>

            <div>name = {state.name}</div>

            <button onClick={() => vm.getCart()}>click3
            </button>
        </div>
    )
}