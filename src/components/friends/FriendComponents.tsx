import React, { Suspense } from "react";
import ErrorBoundary from "../util/ErrorBoundary";
import dynamic from "next/dynamic";

const FriendComponents = () => {
  const FriendCardCompo = dynamic(() => import("./FriendCardCompo"), {
    ssr: false,
  });
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>loading중...</div>}>
          <FriendCardCompo />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default FriendComponents;
