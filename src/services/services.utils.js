const isSuccessful = (statusCode) => statusCode >= 200 && statusCode < 400;

const getMethod = (method = "get") => {
  const validMethods = ["get", "post", "patch", "delete", "put"];
  if (validMethods.includes(method.toLowerCase())) {
    return method.toUpperCase();
  }

  throw new Error(`Wrong method used. ${method} is not a valid method.`);
};

const getHeaders = (originalHeaders = {}) => {
  const headers = {
    ...originalHeaders,
  };

  return headers;
};

const getBody = (body, headers) => {
  const contentType = headers["Content-Type"] ? headers["Content-Type"] : null;

  if (contentType === "application/json" && body != null) {
    return JSON.stringify(body);
  }
  return body;
};

const makeRequest = async ({ URL_ENDPOINT, options = {} }) => {
  const { method: rawMethod, headers: rawHeaders, body: rawBody } = options;
  const method = getMethod(rawMethod);
  const headers = getHeaders(rawHeaders);
  const body = getBody(rawBody, headers);

  const response = await fetch(URL_ENDPOINT, { body, method, headers });
  const code = response.status;
  const parsedResponse = await response.json();
  return {
    data: parsedResponse,
    status: code,
    isSuccessful: isSuccessful(code),
  };
};

export { makeRequest };
