import { userInfoState } from "@/store/atom";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

const AuthPage = () => {
  const router = useRouter();
  const setUserToken = useSetRecoilState(userInfoState);
  useEffect(() => {
    const accessToken = router.query.accessToken as string;
    const refreshToken = router.query.refreshToken as string;
    setUserToken({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    router.replace("/");
  });
  return <div>Authenticating...</div>;
};

export default AuthPage;
