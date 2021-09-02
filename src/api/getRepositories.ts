import instance from "./config";

export const getRepositories = async (
  since: string,
  spoken_language_code: string,
  language: string
) => {
  const response = await instance.get("/repositories", {
    params: {
      since,
      spoken_language_code,
      language,
    },
  });
  return response.data;
};
