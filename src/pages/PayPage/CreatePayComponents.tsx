import { useState } from "react";

import { UserInfoInSpace } from "@/apis/Space/SpaceSearchAllUserApi";
import ReactImg from "@/assets/react.svg";
import CheckBox from "@/components/CheckBox";
import { Member } from "@/pages/ChatPage/ChatCreatePage/ChatCreatePage.styled";
import * as s from "@/pages/PayPage/PayPage.styled";

import { ChatUserInfoInSpace } from "./CreateRequestPage";
interface payChatDivtype {
  img: string;
  name: string;
  cnt: number;
}

const PayChatMemberDiv = ({ info }: { info: UserInfoInSpace }) => {
  const imgUrl = info.profileImgUrl === null ? undefined : info.profileImgUrl;
  return (
    <s.RowFlexDiv style={{ alignItems: "center" }}>
      <img style={{ width: "2.5rem", height: "2.5rem", marginLeft: "1.875rem" }} src={imgUrl} />
      <span className="name" style={{ marginLeft: "0.75rem" }}>
        {info.userName}
      </span>
      <CheckBox></CheckBox>
    </s.RowFlexDiv>
  );
};
export const PayChatDiv = ({ info }: { info: ChatUserInfoInSpace }) => {
  console.log(info);
  const [flag, setFlag] = useState(false);
  const controlFlag = () => {
    setFlag(!flag);
  };
  return (
    <s.ColumnFlexDiv>
      <Member>
        <section>
          <img src={info.imgUrl} />
          <span className="name">{info.chatRoomName}</span>
          <s.CountText className="count">{info.userList?.length}</s.CountText>
        </section>
        {flag ? (
          <CheckBox
            checked={true}
            onClick={() => {
              controlFlag();
            }}
          ></CheckBox>
        ) : (
          <CheckBox
            checked={false}
            onClick={() => {
              controlFlag();
            }}
          ></CheckBox>
        )}
      </Member>
      {info.userList?.map((value, index) => {
        return <PayChatMemberDiv key={index} info={value}></PayChatMemberDiv>;
      })}
    </s.ColumnFlexDiv>
  );
};
