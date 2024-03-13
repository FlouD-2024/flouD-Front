import { BASE_URL } from "@/config";
import axios from "axios";

export interface MyFriendList{
    friendship_id: number,
    nickname: string,
    friendshipStatus: string,
    introduction: string
}

export const getUserInfo = async () => {
    const response = await axios.get(`https://floud.online/api/mypage`, {
        headers: {
            Authorization: `Bearer "eyJraWQiOiI5ZjI1MmRhZGQ1ZjIzM2Y5M2QyZmE1MjhkMTJmZWEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmMDQ5M2JhMTgxMzQ2N2JhZjcyOThlMWVlNGZlNmNkMCIsInN1YiI6IjMzNzQ2NjI5MDUiLCJhdXRoX3RpbWUiOjE3MDk3Mzk3MzgsImlzcyI6Imh0dHBzOi8va2F1dGgua2FrYW8uY29tIiwiZXhwIjoxNzA5NzYxMzM4LCJpYXQiOjE3MDk3Mzk3MzgsImVtYWlsIjoiam9iY2hvNjMyMEBnbWFpbC5jb20ifQ.SGmH-wjiIJIpKJJE_FJmiGGRFff7TlzIg7L8EvqgFvCEaogrsYCvtLE_w3wdrns7EcW2gpKvNVAezNK1s5dKFq6Xvz-m_Xy1mncEG15RHmFZ3hLUkoPyM7jIWcxdZNyCnIRCJaLvpMzXsK9R_B7XxfhDSM7jOuZPQxQOX61PslLmh3LSu_8hgSjekk9Y8dqi_K6KqcB3040-wrVhzDeEeMSDhRvbIJyngYexu1zr1pAVUXsf6cTMCKrSy7nCIRZ9R5knx-uvPw3H5vhOlpSox2dT8zQFZRBgeSedF5PTFZVC4B702Xh8tbZ_ZsT1a4jKlYO3i6RCLW4kUbcUgsbsvA"`
        }
    });

    return response.data;
};

export const putUserInfo = async (date: string) => {
    const response = await axios.put(`https://floud.online/api/mypage`, {
        headers: {
            Authorization: `Bearer "eyJraWQiOiI5ZjI1MmRhZGQ1ZjIzM2Y5M2QyZmE1MjhkMTJmZWEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmMDQ5M2JhMTgxMzQ2N2JhZjcyOThlMWVlNGZlNmNkMCIsInN1YiI6IjMzNzQ2NjI5MDUiLCJhdXRoX3RpbWUiOjE3MDk3Mzk3MzgsImlzcyI6Imh0dHBzOi8va2F1dGgua2FrYW8uY29tIiwiZXhwIjoxNzA5NzYxMzM4LCJpYXQiOjE3MDk3Mzk3MzgsImVtYWlsIjoiam9iY2hvNjMyMEBnbWFpbC5jb20ifQ.SGmH-wjiIJIpKJJE_FJmiGGRFff7TlzIg7L8EvqgFvCEaogrsYCvtLE_w3wdrns7EcW2gpKvNVAezNK1s5dKFq6Xvz-m_Xy1mncEG15RHmFZ3hLUkoPyM7jIWcxdZNyCnIRCJaLvpMzXsK9R_B7XxfhDSM7jOuZPQxQOX61PslLmh3LSu_8hgSjekk9Y8dqi_K6KqcB3040-wrVhzDeEeMSDhRvbIJyngYexu1zr1pAVUXsf6cTMCKrSy7nCIRZ9R5knx-uvPw3H5vhOlpSox2dT8zQFZRBgeSedF5PTFZVC4B702Xh8tbZ_ZsT1a4jKlYO3i6RCLW4kUbcUgsbsvA"`
        }
    });

    return response.data;
};

export const getUserCommunity = async (page: number) => {
    const response = await axios.get(`https://floud.online/api/mypage/community`, {
        headers: {
            Authorization: `Bearer "eyJraWQiOiI5ZjI1MmRhZGQ1ZjIzM2Y5M2QyZmE1MjhkMTJmZWEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmMDQ5M2JhMTgxMzQ2N2JhZjcyOThlMWVlNGZlNmNkMCIsInN1YiI6IjMzNzQ2NjI5MDUiLCJhdXRoX3RpbWUiOjE3MDk3Mzk3MzgsImlzcyI6Imh0dHBzOi8va2F1dGgua2FrYW8uY29tIiwiZXhwIjoxNzA5NzYxMzM4LCJpYXQiOjE3MDk3Mzk3MzgsImVtYWlsIjoiam9iY2hvNjMyMEBnbWFpbC5jb20ifQ.SGmH-wjiIJIpKJJE_FJmiGGRFff7TlzIg7L8EvqgFvCEaogrsYCvtLE_w3wdrns7EcW2gpKvNVAezNK1s5dKFq6Xvz-m_Xy1mncEG15RHmFZ3hLUkoPyM7jIWcxdZNyCnIRCJaLvpMzXsK9R_B7XxfhDSM7jOuZPQxQOX61PslLmh3LSu_8hgSjekk9Y8dqi_K6KqcB3040-wrVhzDeEeMSDhRvbIJyngYexu1zr1pAVUXsf6cTMCKrSy7nCIRZ9R5knx-uvPw3H5vhOlpSox2dT8zQFZRBgeSedF5PTFZVC4B702Xh8tbZ_ZsT1a4jKlYO3i6RCLW4kUbcUgsbsvA"`
        },
        // params: {
        //     page: page
        // }
    });

    return response.data;
};

export const getUserFriend = async (page: number) => {
    const response = await axios.get(`https://floud.online/api/mypage/friend`, {
        headers: {
            Authorization: `Bearer "eyJraWQiOiI5ZjI1MmRhZGQ1ZjIzM2Y5M2QyZmE1MjhkMTJmZWEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmMDQ5M2JhMTgxMzQ2N2JhZjcyOThlMWVlNGZlNmNkMCIsInN1YiI6IjMzNzQ2NjI5MDUiLCJhdXRoX3RpbWUiOjE3MDk3Mzk3MzgsImlzcyI6Imh0dHBzOi8va2F1dGgua2FrYW8uY29tIiwiZXhwIjoxNzA5NzYxMzM4LCJpYXQiOjE3MDk3Mzk3MzgsImVtYWlsIjoiam9iY2hvNjMyMEBnbWFpbC5jb20ifQ.SGmH-wjiIJIpKJJE_FJmiGGRFff7TlzIg7L8EvqgFvCEaogrsYCvtLE_w3wdrns7EcW2gpKvNVAezNK1s5dKFq6Xvz-m_Xy1mncEG15RHmFZ3hLUkoPyM7jIWcxdZNyCnIRCJaLvpMzXsK9R_B7XxfhDSM7jOuZPQxQOX61PslLmh3LSu_8hgSjekk9Y8dqi_K6KqcB3040-wrVhzDeEeMSDhRvbIJyngYexu1zr1pAVUXsf6cTMCKrSy7nCIRZ9R5knx-uvPw3H5vhOlpSox2dT8zQFZRBgeSedF5PTFZVC4B702Xh8tbZ_ZsT1a4jKlYO3i6RCLW4kUbcUgsbsvA"`
        },
        params: {
            page: page
        }
    });

    return response.data;
};

export const getNameCheck = async (date: string) => {
    const params = {"name": name}
    const response = await axios.get(`https://floud.online/api/mypage/check`, {
        headers: {
            Authorization: `Bearer "eyJraWQiOiI5ZjI1MmRhZGQ1ZjIzM2Y5M2QyZmE1MjhkMTJmZWEiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmMDQ5M2JhMTgxMzQ2N2JhZjcyOThlMWVlNGZlNmNkMCIsInN1YiI6IjMzNzQ2NjI5MDUiLCJhdXRoX3RpbWUiOjE3MDk3Mzk3MzgsImlzcyI6Imh0dHBzOi8va2F1dGgua2FrYW8uY29tIiwiZXhwIjoxNzA5NzYxMzM4LCJpYXQiOjE3MDk3Mzk3MzgsImVtYWlsIjoiam9iY2hvNjMyMEBnbWFpbC5jb20ifQ.SGmH-wjiIJIpKJJE_FJmiGGRFff7TlzIg7L8EvqgFvCEaogrsYCvtLE_w3wdrns7EcW2gpKvNVAezNK1s5dKFq6Xvz-m_Xy1mncEG15RHmFZ3hLUkoPyM7jIWcxdZNyCnIRCJaLvpMzXsK9R_B7XxfhDSM7jOuZPQxQOX61PslLmh3LSu_8hgSjekk9Y8dqi_K6KqcB3040-wrVhzDeEeMSDhRvbIJyngYexu1zr1pAVUXsf6cTMCKrSy7nCIRZ9R5knx-uvPw3H5vhOlpSox2dT8zQFZRBgeSedF5PTFZVC4B702Xh8tbZ_ZsT1a4jKlYO3i6RCLW4kUbcUgsbsvA"`
        }
    });

    return response.data;
};