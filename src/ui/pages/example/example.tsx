import React, {Component} from "react";
import {ExampleVm, TExampleVm, TExampleVmState} from "./example_vm";

type TExampleProps = {}

export class ExamplePage extends Component<TExampleProps, TExampleVmState> {
    vm = new ExampleVm()

    constructor(props: TExampleProps) {
        super(props);
        this.state = this.vm.state()
        this.vm.initState()
    }

    componentWillUnmount() {
        this.vm.dispose()
    }

    async updateComponentOnRender() {
        setTimeout(() => {
            this.vm.changeStateNotifier.subscribe((value) => {
                if (value) {
                    this.setState(value)
                }
            })
        }, 50)
    }

    render() {
        this.updateComponentOnRender()

        return <ExampleView vm={this.vm} state={this.state}/>;
    }
}

const ExampleView = ({vm, state}: TExampleVm): JSX.Element => {

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