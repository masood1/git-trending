import axios from "axios";

export const getRepositories = async () => {
    const response = await axios.get("https://private-anon-cbc2a19056-githubtrendingapi.apiary-proxy.com/repositories");
    return response.data;
  };
  