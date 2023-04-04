import { createReducer } from "@reduxjs/toolkit";
import userAction from './actions'

const { change_user_status, user_action } = userAction

const initialState = {
    login: false,
    user: null,
}

const userReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            change_user_status,
            (state, action) => {
                let newState = {
                    ...state,
                    login: action.payload.login
                }
                return newState
            }
        )
        .addCase(
            user_action,
            (state, action) => {
                let newState = {
                    ...state,
                    user: action.payload.data
                }
                return newState
            }
        )
)

export default userReducer