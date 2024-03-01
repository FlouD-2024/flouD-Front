import React from "react";
import { ModalLayout } from "../main/AlarmSideBar";
import { styled } from "twin.macro";
import X from "@/img/svg/x-box.svg";

type prop = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  check: string;
  setCheck: React.Dispatch<React.SetStateAction<string>>;
};

const FollowModal = (prop: prop) => {
  const onClose = () => {
    prop.setOpen(!prop.open);
    prop.setCheck("");
  };
  return (
    <ModalLayout>
      {prop.check === "notFound" ? (
        <>
          <Modal className="nofriend">
            <article className="w-full h-full relative">
              <p
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => onClose()}
              >
                <X />
              </p>
              <div>없는 것 </div>
            </article>
          </Modal>
        </>
      ) : (
        <>
          <Modal>
            <article className="w-full h-full relative">
              <p
                className="absolute top-5 right-5 cursor-pointer"
                onClick={() => onClose()}
              >
                <X />
              </p>
              <div>있는 것</div>
            </article>
          </Modal>
        </>
      )}
    </ModalLayout>
  );
};

export default FollowModal;

const Modal = styled.div`
  background-color: white;
  width: 510px;
  height: 423px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  &.nofriend {
    width: 342.5px;
    height: 284px;
    border-radius: 13.43px;
  }
`;
