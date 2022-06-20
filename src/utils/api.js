import axios from "axios"

const BASEURL = "http://127.0.0.1:8000/api"
export default {
    login(email, password) {
        return axios.post(`${BASEURL}/auth/login/`, {email:email, password:password}).
        then(res => res.json())
        .then(data => data)
    }
}