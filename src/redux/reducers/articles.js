import { types } from '../types';

let articles_old=[]
export const articles=(state=articles_old,action)=>{
    switch (action.type) {
        case types.SetArticles:
        {
            articles_old=action.payload
            return action.payload;
        }
        case types.AddArticles:
        {
            articles_old=[action.payload,...articles_old]
            return articles_old;
        }
        case types.UpdateArticles:
        {
            alert(action.payload._id)
            let articlesfound=articles_old.find(x=>x._id==action.payload._id);
            if(articlesfound)
            {
                articlesfound.author=action.payload.author;
                articlesfound.description=action.payload.description;
                articlesfound.name=action.payload.name;
                articlesfound._id=action.payload._id;
            }
            return articles_old;
        }
        case types.DeleteArticle:
        {   
            articles_old=articles_old.filter(x=>x._id!=action.payload);
            // articles_old=[action.payload,...articles_old]
            return articles_old;
        }
        default :{
            return state
        }
    }
}