import axios from "axios";

/** TODO:  
    - interceptors for error handeling 
**/

const BASE_URL = "https://private-anon-5ef7b56b26-githubtrendingapi.apiary-mock.com/";
const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
