import { BASE_URL } from "@/config";
import axios, { AxiosError } from "axios";
import refresh from "./refresh";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const ErrorType = error as AxiosError;
    const axiosError = ErrorType.response?.status;
    const { config } = error;
    if (axiosError !== 401) {
      return Promise.reject(error);
    }
    // 리프레시 토큰 만료인 경우
    if (axiosError === 401) {
      alert("리프레시 만료");
      localStorage.clear();
      window.location.href = "/";
      return Promise.reject(error);
    }
    //액세스 토큰 만료인 경우
    if (axiosError === 402) {
      const originRequest = config;
      const reissueToken = await refresh();

      setAccessAndRefresh(reissueToken.accessToken, reissueToken.refreshToken);
      originRequest.headers.Authorization = `Bearer ${reissueToken.accessToken}`;

      return axiosInstance(originRequest);
    }
  }
);

const setAccessAndRefresh = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);
};
