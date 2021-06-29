
import {repository} from '../../utiles/repository';
import {types} from '../types'
// export function getAuthenticateUserPendingAction() {
//     return {
//         type: AUTHENTICATION_PENDING
//     }
// }

// export function getAuthenticationSuccessAction(userSession) {
//     return {
//         type: AUTHENTICATION_SUCCESS,
//         user: userSession.user,
//         accessToken: userSession.accessToken
//     }
// }

// export function getAuthenticationErrorAction(error) {
//     return {
//         type: AUTHENTICATION_ERROR,
//         error: error
//     }
// }

// export function authenticateUser(email, password) {

//     console.log("Authenticate")

//     return dispatch => {
//         dispatch(getAuthenticateUserPendingAction());
//         login(email, password)
//             .then(
//                 userSession => {
//                     const action = getAuthenticationSuccessAction(userSession);
//                     dispatch(action);
//                 },
//                 error => {
//                     dispatch(getAuthenticationErrorAction(error));
//                 }
//             )
//             .catch(error => {
//                 dispatch(getAuthenticationErrorAction(error));
//             })
//     }
// }

// function login(email, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     };
//     return fetch('http://localhost:3000/user/login', requestOptions)
//     .then(handleResponse)
//     .then(userSession => {
//         return userSession;
//     });
// }

// function handleResponse(response) {

//     const authorizationHeader = response.headers.get('Authorization');

//     return response.text().then(text => {

//         console.log('Receive result:' + authorizationHeader)

//         const data = text && JSON.parse(text);
//         var token
//         if(authorizationHeader)
//         {
//             token = authorizationHeader.split(" ")[1];
//         }

//         if (!response.ok) {
//             if (response.status === 401) {
//                 logout();
//             }
//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//             }
//             else {
//                 let userSession = {
//                     user: data,
//                     accessToken: token
//                 }
//                 return userSession;
//             }
        
//     });

// }

// function logout() {
//     console.error('Should logout user')
// }


export const signIn = (dataget) => {

    return async dispatch => {
        try {
            
                const {status,data}= await  repository.login(dataget).then(x=>x).then(x=>x);
                if(status==200)
                {
                         dispatch({
                    type: types.LOG_In,
                    payload: data.token
                })
                }
           
        }
        catch (error) {
           console.log(error)
        }
    }
}

export const logout= () => {

    return async dispatch => {
        dispatch({
            type: types.LOG_OUT,
            payload: null
        })
    }
}
