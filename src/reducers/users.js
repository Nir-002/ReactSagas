import { Types } from '../actions/users';

const INITAL_STATE = {
    items: []
};


export default function users(state = INITAL_STATE, action) {
    switch (action.Types) {
        case Types.GET_USER_SUCCESS: {
            return {
                items: action.payload.items
            }
        }
        default: {
            return state;
        }
    }
}
