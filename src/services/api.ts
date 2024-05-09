import axios from "axios";

export const api = axios.create({
    baseURL: 'https://generativelanguage.googleapis.com',
    headers: {
        "Authorization": "Bearer ${access_token}"
    }
})