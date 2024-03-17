import React, { Suspense, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import { ScreenBox } from "..";
import ContentNav from "@/components/util/ContentNav";
import CommunityCompoWrapper from "@/components/community/CommunityCompoWrapper";
import ErrorBoundary from "@/components/util/ErrorBoundary";

const noto = Noto_Sans_KR({ subsets: ["latin"] });

export const CommunityText = ({ isMain }: { isMain: boolean }) => {
  return (
    <>
      <div className="flex w-full h-[60px] justify-end items-center mb-7">
        <ContentNav />
      </div>
      {isMain ? (
        <div className="font-bold tracking-[-6%] text-4xl mb-10 px-5">
          Community
        </div>
      ) : (
        <div className="font-bold tracking-[-6%] text-4xl mb-10 px-14">
          Community
        </div>
      )}
    </>
  );
};

const index = () => {
  return (
    <main
      className={`min-h-screen flex flex-col justify-center ${noto.className}`}
    >
      <ScreenBox>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <CommunityText isMain />
            <CommunityCompoWrapper />
          </Suspense>
        </ErrorBoundary>
      </ScreenBox>
    </main>
  );
};

export default index;
