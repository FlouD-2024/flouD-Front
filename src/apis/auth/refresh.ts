import { BASE_URL } from "@/config";
import axios from "axios";

const refresh = async () => {
  const refresh = localStorage.getItem("refresh_token") as string;
  const social = localStorage.getItem("social_type") as string;

  const response = await axios.post(
    `${BASE_URL}/api/auth/${social}/refresh?refresh_token=${refresh}`
  );

  return response.data;
};

export default refresh;
