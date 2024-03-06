import { BASE_URL } from "@/config";
import axios from "axios";

const refresh = async () => {
  const refresh = localStorage.getItem("refresh_token") as string;

  const response = await axios.post(`${BASE_URL}/어쩌구저쩌구`, {
    token: refresh,
  });

  return response.data;
};

export default refresh;
