import axios from "axios";

const api = axios.create({
    baseURL : 'http://localhost:5000/api'
})

// https://litlink-backend.onrender.com/api

export default api 