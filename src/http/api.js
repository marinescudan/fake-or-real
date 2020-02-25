import axios from 'axios'

const api = {
    get(url, request) {
        return axios
            .get(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
}

export default api;