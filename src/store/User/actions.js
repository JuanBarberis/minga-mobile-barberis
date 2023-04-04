import { createAction } from "@reduxjs/toolkit";

const change_user_status = createAction(
    'change_user_status',
    ({ status }) => {
        return {
            payload: {
                login: status
            }
        }
    }
)
const user_action = createAction(
    'user_action',
    ({ data }) => {
        return {
            payload: {
                data: data
            }
        }
    }
)

const userAction = { change_user_status, user_action}
export default userAction