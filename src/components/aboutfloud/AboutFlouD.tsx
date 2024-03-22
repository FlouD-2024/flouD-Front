import React from "react";
import Typography from "../Typography";
import FlouDs from "../aboutfloud/FlouDs";
import be1 from "../../img/about/be1.png"
import be2 from "../../img/about/be3.jpg"
import fe1 from "../../img/about/fe1.jpg"
import fe2 from "../../img/about/fe2.png"
import pm from "../../img/about/pm.jpg"
import de from "../../img/about/de.jpg"

type Props = {};

export default function dd({}: Props) {
  const members = [
    {
      part: "PM",
      name: "양나은",
      img: pm,
    },
    {
      part: "DE",
      name: "정민지",
      img: de,
    },
    {
      part: "FE",
      name: "조민규",
      img: fe2,
    },
    {
      part: "FE",
      name: "민유빈",
      img: fe1,
    },
    {
      part: "BE",
      name: "김성준",
      img: be1,
    },
    {
      part: "BE",
      name: "강연수",
      img: be2,
    },
  ];
  return (
    <div className="text-center">
      <Typography title="About FlouD" type="bold30" />
      <div className="w-[100px] h-[1px] border-[1px] border-black mx-[auto] my-[50px]"></div>
      <Typography title="플라우디는 성장의 한 페이지를 기록하기 위해" type="bold40-blue" />
      <Typography title="만들어지게 되었습니다." type="bold40-blue" />
      <div className="mt-[50px] mb-[70px]">개발자들은 아래와 같습니다.</div>
      <div className="grid grid-rows-3 grid-cols-3 px-[120px] gap-y-20">
        {members.map((member) => {
          return (
            <FlouDs part={member.part} name={member.name} img={member.img} key={member.name} />
          );
        })}
      </div>
    </div>
  );
}
