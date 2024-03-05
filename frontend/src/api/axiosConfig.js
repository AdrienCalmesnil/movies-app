import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: [
        {"Access-Control-Allow-Origin": "*"},
        {"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"},
        {"Access-Control-Allow-Headers": "Content-Type"}
    ]
});