import instance from "./config";

export const getDevelopers = async (
  since: string,
  language: string
) => {
  const response = await instance.get("/developers?since=monthly", {
    params: {
      since,
      language,
    },
  });
  return response.data;
};
