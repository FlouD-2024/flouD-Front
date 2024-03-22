import { totalPostListType } from "@/types/communityType";
import request from "@/utils/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface PostSuccess {
  success: boolean;
}

export const usePutCommunity = ({ prop }: { prop: totalPostListType }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const putCommunity = async () => {
    await request<totalPostListType, PostSuccess, null>({
      uri: `/api/community/post`,
      method: "put",
      data: prop,
    });
  };

  const { mutate } = useMutation({
    mutationFn: putCommunity,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-communityList", { uri: `/api/community` }],
      });
      alert("게시글이 수정되었습니다.");
      router.replace("/community");
    },
  });

  return {
    mutate,
  };
};
