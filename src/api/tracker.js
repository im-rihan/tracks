import axios from "axios";

const instance = axios.create({
    baseURL: 'http://c4e1-117-201-122-81.ngrok.io'
});
export default instance;