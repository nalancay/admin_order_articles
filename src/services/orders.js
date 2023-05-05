import { makeRequest } from "./services.utils";
const URL_ENDPOINT = `http://localhost:8000/orders`;

export default class Orders {
  static async getOrders() {
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

  static createOrder = async (dataOrder) => {
    const options = {
      method: "POST",
      body: dataOrder,
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
  static editOrder = async (dataOrder, idOrder) => {
    const URL = `${URL_ENDPOINT}/${idOrder}`;

    const options = {
      method: "PUT",
      body: dataOrder,
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

  static deleteOrder = async (idOrder) => {
    const URL = `${URL_ENDPOINT}/${idOrder}`;
    const options = {
      method: "DELETE",
    };
    const { isSuccessful, status } = await makeRequest({
      URL_ENDPOINT: URL,
      options,
    });

    return { isSuccessful, status };
  };
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
