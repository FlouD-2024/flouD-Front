import { postRetroDetailType } from "@/types/retroType";
import request from "@/utils/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface WriteRetroReq {
  title: string;
  keep_memoir: string;
  problem_memoir: string;
  try_memoir: string;
}

export const usePostRetro = (req: WriteRetroReq) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const postRetro = async () => {
    await request<WriteRetroReq, postRetroDetailType, null>({
      uri: `/api/memoir`,
      method: "post",
      data: req,
    });
  };

  const { mutate } = useMutation({
    mutationKey: ["post-retro"],
    mutationFn: postRetro,
    onSuccess: () => {
      alert("회고록이 작성되었습니다.");
      queryClient.invalidateQueries({
        queryKey: ["get-mainInfo", { uri: `/api/home` }],
      });
      router.replace("/main");
    },
  });

  return {
    mutate,
  };
};
