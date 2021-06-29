import {repository} from '../../utiles/repository';
import {types} from '../types'
export const get_articles = () => {

    return async dispatch => {
        try {
            
                const {status,data}= await  repository.articles().then(x=>x).then(x=>x);
                if(status==200)
                {
                         dispatch({
                    type: types.SetArticles,
                    payload: data&&data.articles?data.articles:[]
                })
                }
           
        }
        catch (error) {
           console.log(error)
        }
    }
}
export const add_article = (data) => {

    return async dispatch => {
        dispatch({
            type: types.AddArticles,
            payload:data
        })
    }
}

export const delete_article = (id) => {

    return async dispatch => {
        try {
            
                const {status,data}= await  repository.deletearticle(id).then(x=>x).then(x=>x);
                if(status==200 || status==201)
                {
                  alert(data.message)
                  dispatch({
                    type: types.DeleteArticle,
                    payload:id
                })
                }
           
        }
        catch (error) {
           console.log(error)
        }
    }
}
export const update_article = (datapost) => {
    return async dispatch => {
        try {
                const {status,data}= await  repository.updatearticle(datapost).then(x=>x).then(x=>x);
                if(status==200 || status==201)
                {
                  alert(data.message)
                  dispatch({
                    type: types.UpdateArticles,
                    payload:data
                })
                }
                else
                {
                    alert(data.message)

                }
           
        }
        catch (error) {
           console.log(error)
        }
    }
}