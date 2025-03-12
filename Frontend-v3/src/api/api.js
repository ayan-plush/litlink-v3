import axios from "axios";

const api = axios.create({
    baseURL : 'https://litlink-backend.onrender.com/api'
})

// https://litlink-backend.onrender.com/api http://localhost:5000/api

export default api 
