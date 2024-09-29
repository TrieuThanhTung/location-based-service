import axios from 'axios';

const axiosService = axios.create({
    baseURL: "https://overpass-api.de/api/interpreter"
});
axiosService.interceptors.request.use(async (config) => {

    config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';

    return config;
})
axiosService.interceptors.response.use((response) => {
    if (response && response.data) {
        return response;
    }
    return response;
}, (error) => {
    return error.response;
});
export default axiosService ;
