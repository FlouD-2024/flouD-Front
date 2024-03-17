import { postListType } from "@/types/communityType";
import request from "@/utils/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface PostSuccess {
  success: boolean;
}

export const usePostCommunity = ({ prop }: { prop: postListType }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const postCommunity = async () => {
    await request<postListType, PostSuccess, null>({
      uri: `/api/community/post`,
      method: "post",
      data: prop,
    });
  };

  const { mutate } = useMutation({
    mutationKey: ["post-community"],
    mutationFn: postCommunity,
    onSuccess: () => {
      alert("게시글이 작성되었습니다.");
      queryClient.invalidateQueries({
        queryKey: ["get-communityList", { uri: `/api/community` }],
      });
      router.replace("/community");
    },
  });

  return {
    mutate,
  };
};
