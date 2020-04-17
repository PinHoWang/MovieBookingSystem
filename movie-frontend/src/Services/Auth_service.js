import axios from 'axios';

const API_URL = 'http://localhost:8080/';

class AuthService {
    // not sure about the token of response data
    // just temporarily named it as 'accessToken'
    login(username, password) {
        // return axios
        //     .post(API_URL + "authenticate", {
        //         username,
        //         password
        //     })
        //     .then(response => {
        //         if (response.data.accessToken) {
        //             localStorage.setItem("user", JSON.stringify(response.data));
        //         }

        //         return response.data;
        //     });

        var u = {
            username: 'jimmywang',
            password: 'n125386594',
            accessToken: 'asdfasdfasdfasdfasdfasdfasdfsd'
        }
        

        localStorage.setItem("user", JSON.stringify(u));
    }


    logout() {
        localStorage.removeItem("user");
    }

    register(username, password) {
        return axios.post(API_URL + "register", {
            username,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();