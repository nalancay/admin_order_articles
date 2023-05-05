import { makeRequest } from "./services.utils";
const URL_ENDPOINT = `http://localhost:8000/articles`;

export default class Products {
  static async getArticles() {
    try {
      const { data, isSuccessful } = await makeRequest({ URL_ENDPOINT });
      if (!isSuccessful) {
        throw new NetworkError();
      }
      return data;
    } catch (err) {
      throw err;
    }
  }

  static createArticle = async (dataArticle) => {
    const options = {
      method: "POST",
      body: dataArticle,
      headers: { "Content-Type": "application/json" },
    };

    const { data, isSuccessful, status } = await makeRequest({
      URL_ENDPOINT,
      options,
    });

    if (!isSuccessful) {
      throw new NetworkError();
    }
    return { data, isSuccessful, status };
  };

  static editArticle = async (dataArticle, idArticle) => {
    const URL = `${URL_ENDPOINT}/${idArticle}`;

    const options = {
      method: "PUT",
      body: dataArticle,
      headers: { "Content-Type": "application/json" },
    };

    const { data, isSuccessful, status } = await makeRequest({
      URL_ENDPOINT: URL,
      options,
    });

    if (!isSuccessful) {
      throw new NetworkError();
    }

    return { data, isSuccessful, status };
  };
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
