import "@/styles/globals.css";
import "@/styles/calendarStyle.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Aside from "@/components/util/Aside";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="min-h-[1024px] h-full min-w-[1440px] w-full flex relative px-[30px] py-[21px]">
          <div>{router.pathname === "/" ? null : <Aside />}</div>
          <div className="flex w-full justify-center">
            <Component {...pageProps} />
          </div>
        </div>
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
