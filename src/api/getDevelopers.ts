import axios from "axios";

export const getDevelopers = async () => {
    const response = await axios.get("https://private-anon-5ef7b56b26-githubtrendingapi.apiary-proxy.com/developers?since=monthly");
    return response.data;
  };
  