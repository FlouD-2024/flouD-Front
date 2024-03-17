import React, { Suspense } from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "@/pages";
import { CommunityText } from "..";
import CommunityBox from "@/components/community/CommunityBox";
import ErrorBoundary from "@/components/util/ErrorBoundary";
import CommunityViewBox from "@/components/community/CommunityViewBox";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

const ViewPage = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <CommunityText isMain={false} />
            <CommunityViewBox />
          </Suspense>
        </ErrorBoundary>
      </ScreenBox>
    </main>
  );
};

export default ViewPage;
