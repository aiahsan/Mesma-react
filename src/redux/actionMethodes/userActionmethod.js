import {repository} from '../../utiles/repository';
import {types} from '../types'
export const get_users = () => {

    return async dispatch => {
        try {
            
                const {status,data}= await  repository.users().then(x=>x).then(x=>x);
                if(status==200)
                {
                         dispatch({
                    type: types.SetUsers,
                    payload: data&&data.users?data.users:[]
                })
                console.log(data,"all users");
                }
           
        }
        catch (error) {
           console.log(error)
        }
    }
}
