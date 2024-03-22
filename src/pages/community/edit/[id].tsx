import { ScreenBox } from "@/pages";
import React, { Suspense } from "react";
import { CommunityText } from "..";
import { Noto_Sans_KR } from "next/font/google";
import ErrorBoundary from "@/components/util/ErrorBoundary";
import dynamic from "next/dynamic";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const CommunityBox = dynamic(
  () => import("@/components/community/CommunityBox"),
  {
    ssr: false,
  }
);

const EditPage = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <CommunityText isMain={false} />
            <CommunityBox />
          </Suspense>
        </ErrorBoundary>
      </ScreenBox>
    </main>
  );
};

export default EditPage;
