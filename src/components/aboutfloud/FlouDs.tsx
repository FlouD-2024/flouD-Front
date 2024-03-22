import React from "react";
import Image, { StaticImageData } from "next/image";
import Profile from "../../img/mypage/min.png";
import Typography from "../Typography";

type Props = {
  part: string;
  name: string;
  img: StaticImageData
};

export default function FlouDs({ part, name, img }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[223px]">
        <Image
          src={img}
          className="rounded-[500px] bg-white object-cover h-[223px]"
          width={223}
          height={223}
          alt="프로필 사진"
        ></Image>
      </div>
      <Typography title={part} type={"bold25"} mt={0} />
      <Typography title={name} type={"bold30"} />
    </div>
  );
}
