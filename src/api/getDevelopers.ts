import instance from "./config";

export const getDevelopers = async () => {
    const response = await instance.get("/developers?since=monthly");
    return response.data;
  };
  