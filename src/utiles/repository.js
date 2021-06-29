import { api } from './baseUrl';
const login = async (data) => {
   return await api.post('user/login', data)
}
const register = async (data) => {
   return await api.post('user/register', data)
}
const users = async () => {
   return await api.get('user')
}
const articles = async () => {
   return await api.get('article')
}
const postarticle = async (data) => {
   return await api.post('article',data)
}
const updatearticle = async (data) => {
   return await api.put('article/'+data._id,data)
}
const deletearticle = async (id) => {
   return await api.delete('article/'+id)
}



export const repository = {
   login,
   register,
   users,
   articles,
   postarticle,
   deletearticle,
   updatearticle
}