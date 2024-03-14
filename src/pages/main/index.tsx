import React, { Suspense } from "react";
import { ScreenBox } from "..";
import MainComponents from "@/components/main/MainComponents";
import { Noto_Sans_KR } from "next/font/google";
import ErrorBoundary from "@/components/util/ErrorBoundary";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const index = () => {
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
