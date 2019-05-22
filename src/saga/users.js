import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/users'

//watchers saga...............
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}

function* getUsers() {
    try {

    }
    catch (e) {

    }
}
