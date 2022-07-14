import axios from "axios";

const instance = axios.create({
    baseURL: 'https://5336-117-217-53-67.ngrok.io'
});
export default instance;