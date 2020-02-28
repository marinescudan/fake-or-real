import axios from 'axios'

const api = {
    get(url, request) {
        return axios
            .get(url, request)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    //TODO: get quiz data from stats api
    //TODO: post quiz chice on stats api
}

export default api;