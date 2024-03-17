import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // 에러가 발생하면 이 메서드를 사용해 state를 업데이트
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 에러 로깅 서비스에 에러를 기록
    // 예: logErrorToMyService(error, errorInfo);
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 에러가 발생했을 때 사용자에게 보여줄 UI
      return <h1>서버에러가 났습니다.</h1>;
    }

    // 에러가 없으면 자식 컴포넌트를 정상적으로 렌더링
    return this.props.children;
  }
}

export default ErrorBoundary;
