import { BASE_URL } from "@/config";
import axios, { AxiosError } from "axios";
import refresh from "./refresh";
import { IError } from "@/utils/request";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return config;
  }
  const token = localStorage.getItem("access_token") as string;
  if (
    token !== null &&
    !config.url?.includes("/api/auth/kako") &&
    !config.url?.includes("/api/auth/google")
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const ErrorType = error as AxiosError;
    const axiosError = ErrorType.response?.data as IError;
    const { config } = error;
    if (axiosError?.code === 500) {
      return Promise.reject(error);
    }
    // 리프레시 토큰 만료인 경우
    if (axiosError?.code === 400) {
      alert("로그인 시간이 만료되었습니다 다시 진행해주세요");
      localStorage.clear();
      window.location.href = "/";
      return Promise.reject(error);
    }
    //액세스 토큰 만료인 경우
    if (axiosError?.code === 401) {
      const originRequest = config;
      const reissueToken = await refresh();

      setAccessAndRefresh(reissueToken.accessToken, reissueToken.refreshToken);
      originRequest.headers.Authorization = `Bearer ${reissueToken.accessToken}`;

      return axiosInstance(originRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

export const setAccessAndRefresh = (
  accessToken: string,
  refreshToken: string
) => {
  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);
};
