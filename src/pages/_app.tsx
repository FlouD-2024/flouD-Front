import "@/styles/globals.css";
import "@/styles/calendarStyle.css";
import "@/styles/myPageCalendarStyle.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Aside from "@/components/util/Aside";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        //10분동안은 캐시된 결과를 사용
        staleTime: 600 * 1000,
        //실패 요청해도 비활성화
        retry: 0,
        // 쿼리 결과를 5분동안 기본으로 저장
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="min-h-[1024px] h-full min-w-[1440px] w-full flex relative px-[30px] py-[21px]">
          <div>{router.pathname === "/" ? null : <Aside />}</div>
          <div className="flex w-full justify-center">
            <PageProtect />
            <Component {...pageProps} />
          </div>
        </div>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

function PageProtect() {
  const router = useRouter();
  useEffect(() => {
    if (
      typeof window !== undefined &&
      router.pathname !== "/" &&
      !router.pathname.includes("/redirect")
    ) {
      const access = localStorage.getItem("access_token") as string;
      if (access === null || access === "") {
        alert("로그인을 진행해주세요");
        router.replace("/");
      }
    }
    console.log("호출중!");
  }, []);
  return null;
}
