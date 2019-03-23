// see post for example
export const domain = "dashlab.com";
// be careful of what is returned, either a json object or an array of json objects
export const createuser = `${domain}/auth/users/create`; //post request
export const login = `${domain}/auth/token/login`; // post request
export const logout = `${domain}/auth/token/logout`; // post request (require token of user you want to logout)
export const listAllUsers = `${domain}/auth/users/`; // post request(require token of user)
export const listCurrentUser = `${domain}/auth/users/me/` // get request
export const getSocialMediaAccount = `${domain}/api/socialmediaaccount/` 
export const getPost = `${domain}/api/post/` 
export const getProfile = `${domain}/api/profile/` 
