import { Suspense } from "react";
import { ScreenBox } from "..";
import { Noto_Sans_KR } from "next/font/google";
import ErrorBoundary from "@/components/util/ErrorBoundary";
import dynamic from "next/dynamic";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
  const MainComponents = dynamic(
    () => import("@/components/main/MainComponents"),
    {
      ssr: false,
    }
  );
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <div className="flex gap-[53px] justify-center">
          <ErrorBoundary>
            <Suspense fallback={<div>loading...</div>}>
              <MainComponents />
            </Suspense>
          </ErrorBoundary>
        </div>
      </ScreenBox>
    </main>
  );
};

export default index;
