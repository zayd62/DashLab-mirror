import axios from 'axios'

// Constants containting the urls for the api requests
export const URL_DOMAIN = "http://127.0.0.1:8000/";
export const CREATEUSER = `${URL_DOMAIN}/auth/users/create`; //post request
export const URL_LOGIN = `${URL_DOMAIN}/auth/token/login`; // post request
export const URL_LOGOUT = `${URL_DOMAIN}/auth/token/logout`; // post request (require token of user you want to logout)
export const URL_LISTALLUSERS = `${URL_DOMAIN}/auth/users/`; // post request(require token of user)
export const URL_LISTCURRENTUSER = `${URL_DOMAIN}/auth/users/me/` // get request
export const URL_SOCIALACCOUNT = `${URL_DOMAIN}/api/socialmediaaccount/`
export const URL_POST = `${URL_DOMAIN}/api/post/`
export const URL_PROFILE = `${URL_DOMAIN}/api/profile/`

// constants containing the functions used for api calls

// API PLAYGROUND BELOW

export const FUNC_CREATEUSERMODEL = async function getCities() {
    console.log("hey its time to make a request")
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/200").then(res => {
            console.log("the reposnse is here")
            console.log(res)
        })

    } catch (error) {
        // https://github.com/axios/axios#handling-errors
        console.log("oh shit, thats not good")
        console.error(error.response.status);
        console.error(error.response.data);

    }
    console.log("this SHOULD print after the api response has been received has finished")
}

export const FUNC_CREATEUSERMODELTWO = async function getCities() {
    console.log("hey its time to make a request")
    try {
        // this should return a 404
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/350").then(res => {
            console.log("the reposnse is here")
            console.log(res)
        })

    } catch (error) {
        // https://github.com/axios/axios#handling-errors
        console.log("oh shit, thats not good")
        console.error(error.response.status);
        console.error(error.response.data);

    }
}