import {store} from "../../../feauteres/common/redux";
import {ExampleVmState} from "./example_state";
import {BehaviorSubject} from "rxjs";
import {exampleService} from "../../../feauteres/example/example_service";

export type TExampleVmState = typeof ExampleVmState

export type TExampleVm = {
    vm: ExampleVm,
    state: TExampleVmState,
}

export class ExampleVm {
    private store = () => store

    state() {
        return store.getState().exampleReducer
    }

    initState() {
        this.setState(ExampleVmState)
    }

    setState(state: TExampleVmState) {
        this.store().dispatch(exampleAction(state))
        this.changeStateNotifier.next(state)
    }

    changeStateNotifier = new BehaviorSubject<TExampleVmState>(ExampleVmState)

    changeName() {
        this.setState({...this.state(), name: 'new_name'})
    }

    changeCount() {
        let count = this.state().count
        this.setState({...this.state(), count: count + 1})
    }

    getCart() {
        exampleService.getCart()
    }

    dispose() {
        this.setState(ExampleVmState)
    }
}

export const exampleReducer = (
    state: TExampleVmState = ExampleVmState,
    action: TAction,
) => {
    return {...action.state, state: action.state};
};

type TAction = {
    type: "set_state",
    state: TExampleVmState,
}

const exampleAction = (state: TExampleVmState): TAction => ({
    type: "set_state",
    state: state,
});