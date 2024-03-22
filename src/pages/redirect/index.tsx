import { setAccessAndRefresh } from "@/apis/auth/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AuthPage = () => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = router.query.access_token as string;
    const refreshToken = router.query.refresh_token as string;
    setAccessAndRefresh(accessToken, refreshToken);
    router.replace("/main");
  });
  return <div>Authenticating...</div>;
};

export default AuthPage;
