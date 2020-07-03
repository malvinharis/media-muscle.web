import axios from "axios";

/**
 * Common config
 */
axios.defaults.timeout = 30000;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

/**
 * Axios for CMS api
 */
const AxiosWeb = axios.create({
  baseURL: process.env.VUE_APP_WEB_API_URL
});

/**
 * Set token on http request
 * @param {String} token
 */
const setTokenAxiosWeb = token => {
  AxiosWeb.defaults.headers.common["Authorization"] = token;
};

/**
 * Remove token on http request
 * @param {String} token
 */
const removeTokenAxiosWeb = () => {
  AxiosWeb.defaults.headers.common["Authorization"] = null;
};

/**
 * Multi Axios init
 */
// const customAxios = axios.create({
//   baseURL: "https://some-custom-domain.com/api/"
// });

export {
  AxiosWeb,
  setTokenAxiosWeb,
  removeTokenAxiosWeb
};