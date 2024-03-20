import { BASE_URL } from "@/config";
import { CheckNameParam, FriendShipStatusType, getNameCheckType, getUserCommunityType, getUserFriendType, getUserInfotype, PageParam, putFriendData, putUserData } from "@/types/myPageType";
import request from "@/utils/request";
import axios from "axios";

export const getUserInfo = async () => {
    const response = await request<null, getUserInfotype, null>({
        uri: "/api/mypage",
        method: "get",
    });

    return response.data;
};

export const putUserInfo = async (data: putUserData) => {
    const response = await request<putUserData, getUserInfotype, null>({
        uri: "/api/mypage",
        method: "put",
        data: data
    });

    return response.data;
};

export const getUserCommunity = async (page: number) => {
    const response = await request<null, getUserCommunityType, null>({
        uri: "/api/mypage/community",
        method: "get",
    });

    return response.data;
};

export const getUserFriend = async (page: number) => {
    const response = await request<null, getUserFriendType, PageParam>({
        uri: "/api/mypage/friend",
        method: "get",
        params: {
            page: page
        }
    });

    return response.data;
};

export const putFriend = async (friendship_id: number, nickname: string, friendshipStatus: FriendShipStatusType) => {
    const response = await request<putFriendData, getUserInfotype, null>({
        uri: "/api/friend",
        method: "put",
        data: {
            friendship_id,
            nickname,
            friendshipStatus
        }
    });

    return response.data;
}

export const putUnFriend = async (friendship_id: number) => {
    const response = await request<null, null, null>({
        uri: `/api/friend/${friendship_id}`,
        method: "put",
    });

    return response.data;
}

export const getNameCheck = async (nickname: string) => {
    const response = await request<null, getNameCheckType, CheckNameParam>({
        uri: "api/mypage/check",
        method: "get",
        params: {
            nickname
        }
    });

    return response.data;
};