import axios from "axios";

const BASE_URL = "http://localhost:5000/api"
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjYxYmYwM2ExOTc1NDdlMWM1Yzg5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjEwMTkzOSwiZXhwIjoxNjU2NzA2NzM5fQ.S6iXwGpezFDCSMby0nIX-I0nRtX9R9O1lPLK2rqgHw4'
export const publicRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})