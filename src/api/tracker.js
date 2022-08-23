import axios from "axios";

const instance = axios.create({
    baseURL: 'http://ce6c-117-201-122-68.ngrok.io'
});
export default instance;