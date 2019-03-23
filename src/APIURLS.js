// see post for example
export const domain = "dashlab.com";
// be careful of what is returned, either a json object or an array of json objects
export const createuser = `${domain}/auth/users/create`; //post
export const login = `${domain}/auth/token/login`; // post
export const logout = `${domain}/auth/token/logout`; // post (require token of user you want to logout)
export const listAllUsers = `${domain}/auth/users/`; // post (require token of user)

export const getSocialMediaAccount = `${domain}/api/socialmediaaccount/` 
export const getPost = `${domain}/api/post/` 
export const getProfile = `${domain}/api/profile/` 
