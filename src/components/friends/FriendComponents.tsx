import React, { Suspense } from "react";
import FriendCardCompo from "./FriendCardCompo";
import ErrorBoundary from "../util/ErrorBoundary";

const FriendComponents = () => {
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
