import axios from "axios"


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
});
export default {
    login(email, password) {
        return instance.post(`/auth/login/`, {email:email, password:password}).
        then(res => res.json())
        .then(data => data)
    },
    categories(){
        return instance.get(`category/`)
        .then(res => {
            return res["data"]
        })
        .then(data => data["results"])
    },
    products(params){
        return instance.get(`product/`, {params:params})
        .then(res => {
            return res["data"]
        })
        .then(data => data)
    }
}