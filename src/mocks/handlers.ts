import { http, HttpResponse } from "msw";

const todos = ["먹기", "자기", "놀기"];

export const handlers = [
  // 할일 목록
  http.get("/todos", ({ request, params, cookies }) => {
    return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
  })

];