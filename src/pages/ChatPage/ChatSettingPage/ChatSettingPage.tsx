import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Chatroom } from "@/apis";
import RightArrowImg from "@/assets/Space/icon_right_arrow.svg";
import StopModal from "@/components/StopModal";
import { ToggleBtn } from "@/components/ToggleBtn";
import TopBarText, { LeftEnum } from "@/components/TopBarText";

const StyledMenu = styled.div`
  display: flex;
  height: 3.5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1.5rem;

  &.exit {
    color: ${({ theme }) => theme.colors.char_orange};
  }

  &.delete {
    color: ${({ theme }) => theme.colors.char_red};
  }
`;

const ChatSettingPage = () => {
  const navigate = useNavigate();
  const {
    state: { chatroomInfo },
  }: { state: { chatroomInfo: Chatroom } } = useLocation();

  const [isExitModal, setIsExitModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isAlarm, setIsAlarm] = useState(false);

  return (
    <div>
      <TopBarText left={LeftEnum.Back} center={`${chatroomInfo.name} 채팅방 설정`} right="" />
      <StyledMenu onClick={() => navigate("/space/spaceoption/accountmanage")}>
        채팅방 멤버
        <img style={{ display: "absolute", right: "0" }} src={RightArrowImg} alt="right_arrow" />
      </StyledMenu>
      <StyledMenu>
        채팅방 알림
        <ToggleBtn isOn={isAlarm} onToggle={() => setIsAlarm((prev) => !prev)} />
      </StyledMenu>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}></div>

      <StyledMenu className="exit" onClick={() => setIsExitModal(true)}>
        채팅방 나가기
      </StyledMenu>
      <StyledMenu className="delete" onClick={() => setIsDeleteModal(true)}>
        채팅방 삭제하기
      </StyledMenu>
      <StopModal
        isOpen={isExitModal}
        onClose={() => setIsExitModal(false)}
        onConfirm={() => {
          setIsExitModal(false);
          navigate("/chat");
        }}
        title="채팅방 나가기"
        content={["나가면 다시 초대를 받아야 들어올 수 있어요", "채팅방을 정말로 나가시겠어요?"]}
        contentColor="#767681"
        confirmButtonColor="#48FFBD"
        cancelButtonText="취소"
        confirmButtonText="나가기"
        confirmButtonTextColor="#171719"
      />
      <StopModal
        isOpen={isDeleteModal}
        onClose={() => setIsDeleteModal(false)}
        onConfirm={() => {
          setIsDeleteModal(false);
          navigate("/chat");
        }}
        title="채팅방 삭제하기"
        content={["모든 사람들이 채팅방에서 나가져요.", "정말로 삭제하시겠어요?"]}
        contentColor="#767681"
        confirmButtonColor="#FF5656"
        cancelButtonText="취소"
        confirmButtonText="삭제하기"
        confirmButtonTextColor="#FFFFFF"
      />
    </div>
  );
};

export default ChatSettingPage;
