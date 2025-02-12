import axios from "axios";

const api = axios.create({
    baseURL : 'https://litlink-backend.onrender.com/api'
})

export default api 