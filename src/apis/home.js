import axios from "../axios";

export const getHome = () => new Promise(async(resolove, reject)=>{
    try {
        const reponse = await axios({
            url: '/home',
            method: 'get'
        })
        resolove(reponse)
    } catch (error) {
        reject(error)
    }
})