
import { types } from '../types';


let users_old=[];
// const initialState = {
//     user: null,
//     loginPending: false,
//     showLoginDialog: false,
//     error: null
// };
export const user = (state = null, action) => {

    switch (action.type) {
        case types.LOG_OUT:
        {
            return null;
        }
        case types.LOG_In:
            {
                return action.payload
            }
        // case types.AUTHENTICATION_PENDING:
        //     return {
        //         ...state,
        //         pending: true,
        //         error: null
        //     }
        // case types.AUTHENTICATION_SUCCESS:
        //     {
        //         return {
        //             ...state,
        //             showLoginDialog: false,
        //             pending: false,
        //             user: action.user,
        //             accessToken: action.accessToken
        //         }
        //     }
        // case types.AUTHENTICATION_ERROR:
        //     {
        //         return {
        //             ...state,
        //             pending: false,
        //             error: 'Authentication failed'
        //         }
        //     }
        default:
            return state;
    }
}

export const users=(state=users_old,action)=>{
    switch (action.type) {
        case types.SetUsers:
        {
            users_old=action.payload
            return action.payload;
        }
        default :{
            return state
        }
    }
}