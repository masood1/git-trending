import instance from "./config";

export const getRepositories = async () => {
    const response = await instance.get("/repositories");
    return response.data;
  };
