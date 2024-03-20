import { usePostRetro } from "@/query/post/usePostRetro";
import { retroTodayOpenAtom } from "@/store/atom";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type Props = {};

export default function RetroToday({}: Props) {
  const setRetroTodayOpened = useSetRecoilState(retroTodayOpenAtom);
  const [retroTitle, setRetroTitle] = useState("");
  const [retroKeep, setRetroKeep] = useState("");
  const [retroProblem, setRetroProblem] = useState("");
  const [retroTry, setRetroTry] = useState("");

  const today = dayjs();
  const { mutate: mutatePost } = usePostRetro({
    title: retroTitle,
    keep_memoir: retroKeep,
    problem_memoir: retroProblem,
    try_memoir: retroTry,
  });

  return (
    <>
      <p className="text-[20px] text-[#4C6FFF]">새로운 회고</p>
      <div className="text-[40px] font-bold">
        {today.month() + 1}월 {today.date()}일 회고 작성
      </div>

      <p className="mt-[20px] mb-[10px] text-[25px]">오늘 하루 요약</p>
      <textarea
        className="w-[100%] rounded-[10px] p-[15px]"
        value={retroTitle}
        onChange={(e) => {
          setRetroTitle(e.target.value);
        }}
      ></textarea>

      <p className="mt-[20px] mb-[10px] text-[25px]">Keep</p>
      <textarea
        className="w-[100%] h-[166px] rounded-[10px] p-[15px]"
        placeholder="오늘 자신이 성취한 것을 작성해주세요."
        value={retroKeep}
        onChange={(e) => {
          setRetroKeep(e.target.value);
        }}
      ></textarea>

      <p className="mt-[20px] mb-[10px] text-[25px]">Problem</p>
      <textarea
        className="w-[100%] h-[166px] rounded-[10px] p-[15px]"
        placeholder="오늘 하려고 했는데 못한 것들을 작성해주세요."
        value={retroProblem}
        onChange={(e) => {
          setRetroProblem(e.target.value);
        }}
      ></textarea>

      <p className="mt-[20px] mb-[10px] text-[25px]">Try</p>
      <textarea
        className="w-[100%] h-[166px] rounded-[10px] p-[15px]"
        placeholder="내일 무엇을 할건지 작성해주세요."
        value={retroTry}
        onChange={(e) => {
          setRetroTry(e.target.value);
        }}
      ></textarea>
      <div className="flex justify-center">
        <button
          className="bg-[black] text-white rounded-[30px] px-[40px] py-[5px] mt-[50px] mb-[50px]"
          onClick={() => {
            mutatePost();
            setRetroTodayOpened(false);
          }}
        >
          회고 작성완료
        </button>
      </div>
    </>
  );
}
