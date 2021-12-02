import axios from "axios";


const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTRiZTFiNDQzN2JmYTcyMzAyYWQwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODQ1NDkyNCwiZXhwIjoxNjM4NzE0MTI0fQ.BF3L8KEnTqgifyW1c947hMHbz2tyWrLPwwWzc7gqRS4';


export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` }
});