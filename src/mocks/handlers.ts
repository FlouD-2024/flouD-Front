import { http, HttpResponse } from "msw";

export const handlers = [
  // 할일 목록
  http.get("/api/memoir/my", ({ request, params, cookies }) => {
    const successResponse = {
      "code": 200,
      "success": true,
      "message": "나의 회고를 성공적으로 조회하였습니다.",
      "data": {
        "nickname": "플라우디",
        "memoir_id": 2,
        "title": "제목입니다",
        "keep_memoir": "계속 유지해나가고 싶은 것들",
        "problem_memoir": "잘 해내지 못한 부분",
        "try_memoir": "앞으로 해결하기 위해 노력할 것들",
        "created_at": "2024-03-02"
      }
    }

    const emptyResponse = {
      "code": 404,
      "success": false,
      "message": "해당 회고를 찾을 수 없습니다.",
      "data": null
    };
    return HttpResponse.json(successResponse)
  }),

  http.get("/api/memoir/week", ({ request, params, cookies }) => {
    const successResponse = {
      "code": 200,
      "success": true,
      "message": "주차별 회고 목록을 성공적으로 조회하였습니다.",
      "data": {
          "nickname": "플라우디",
          "memoirList": [
              {
                  "memoir_id": 3,
                  "title": "제목입니다3",
                  "created_at": "2024-03-03"
              },
              {
                  "memoir_id": 4,
                  "title": "제목입니다4",
                  "created_at": "2024-03-04"
              },
              {
                  "memoir_id": 5,
                  "title": "제목입니다5",
                  "created_at": "2024-03-05"
              }
          ]
      }
    }

    const emptyResponse = {
      "code": 200,
      "success": true,
      "message": "주차별 회고 목록을 성공적으로 조회하였습니다.",
      "data": {
          "nickname": "플라우디",
          "memoirList": []
      }
    }
    return HttpResponse.json(successResponse)
  }),

];