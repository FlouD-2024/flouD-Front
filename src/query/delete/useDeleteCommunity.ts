import request from "@/utils/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useDeleteCommunity = (community_id: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const deleteCommunity = async () => {
    await request<null, null, null>({
      uri: `/api/community/post/${community_id}`,
      method: "delete",
    });
  };

  const { mutate } = useMutation({
    mutationKey: ["community-delete"],
    mutationFn: deleteCommunity,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-communityList", { uri: `/api/community` }],
      });
      alert(`게시글이 삭제되었습니다.`);
      router.replace("/community");
    },
  });

  return {
    mutate,
  };
};
