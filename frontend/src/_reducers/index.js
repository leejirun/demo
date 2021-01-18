import { REGISTER_USER } from "../_actions/type";

export default function (state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, loginSuccess: action.payload };
        default:
            return state;
    }
}