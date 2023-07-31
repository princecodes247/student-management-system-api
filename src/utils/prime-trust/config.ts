import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Get the base URL from environment variables
const baseURL: string =
  process.env.PRIMETRUST_API_URL || "https://sandbox.primetrust.com";

let currentJWT: string = "";

const api = axios.create({
  baseURL,
  timeout: 90000,
  maxBodyLength: Infinity,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${currentJWT}`,
  },
});

const api2 = axios.create({
  baseURL,
  timeout: 90000,
  maxBodyLength: Infinity,
});

const refreshAuthLogic = (failedRequest: {
  response: AxiosResponse<any>;
}): Promise<AxiosResponse<any>> => {
  // Your code for logging the user back in goes here.
  // This function should return a promise that resolves with the new JWT
  return api
    .post(
      "/auth/jwts",
      {},
      {
        auth: {
          username: process.env.PRIMETRUST_API_USERNAME || "",
          password: process.env.PRIMETRUST_API_PASSWORD || "",
        },
      }
    )
    .then((res) => {
      // Set the new JWT in the header of the failed request
      // if (newJWT
      console.log("newJWT", res.data.token);
      currentJWT = res.data.token;
      //@ts-ignore
      failedRequest.response.config.headers?.set(
        "Authorization",
        `Bearer ${currentJWT}`
      );
      // Return the request again
      return axios(failedRequest.response.config);
    });
};

const interceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      //@ts-ignore
      config.headers.authorization = `Bearer ${currentJWT}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    (error: any) => {
      const originalRequest = error.config;
      const { title, detail } = error?.response.data.errors[0];
      if (error?.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        return refreshAuthLogic(error);
      }

      return Promise.reject(
        new Error(`${title + ": " + detail || error.message}`)
      );
    }
  );
};

interceptor(api);

export default api;
export { api2 };
