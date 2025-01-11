import {authService} from "../../../feauteres/auth/auth_service";
import {store} from "../../../feauteres/common/redux";
import {AuthPageVmState} from "./auth_state";

type TAuthPageVmState = typeof AuthPageVmState

export type ViewCompClassVmInterface = {
    vm: ViewCompClassVm
}

export class ViewCompClassVm {
    private state() {
        return store.getState().authPageVmReducer
    }

    changeName() {
        store.dispatch(AuthPageActionVM({...this.state(), name: 'хуй'}))
    }

    changeCount() {
        let count = this.state().count
        store.dispatch(AuthPageActionVM({...this.state(), count: count + 1}))
    }

    getCart() {
        authService.getCart()
    }

    dispose() {
        store.dispatch(AuthPageActionVM(AuthPageVmState))
    }
}

export const authPageVmReducer = (
    state: TAuthPageVmState = AuthPageVmState,
    action: TAction,
) => {
    return {...action.state, state: action.state};
};

type TAction = {
    type: "set_state",
    state: TAuthPageVmState,
}

const AuthPageActionVM = (state: TAuthPageVmState): TAction => ({
    type: "set_state",
    state: state,
});