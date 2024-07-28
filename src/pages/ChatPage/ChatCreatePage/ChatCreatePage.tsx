import TopBarText, { LeftEnum } from "@/components/TopBarText";
import ChatroomImg from "@/assets/ChatPage/btn_chatroom_img.svg";
import { ChatCreateContainer, ChatroomAddImgBtn, ChatroomName, InviteInput, Member } from "./ChatCreatePage.styled";
import { Input } from "@/components/Input";
import { useEffect, useState } from "react";

interface member {
	name: string;
	isAdmin: boolean;
	profileImg: string;
}

const ChatCreatePage = () => {
	const [nameLength, setNameLength] = useState<number>(0);
	const [invitedMemberList, setInvitedMemberList] = useState<member[]>([]);
	const [memberList, setMemberList] = useState<member[]>([]);

	useEffect(() => {
		setMemberList([
			{ name: "홍길동", isAdmin: false, profileImg: "https://placehold.co/100x100" },
			{ name: "김길동", isAdmin: false, profileImg: "https://placehold.co/100x100" },
			{ name: "박길동", isAdmin: true, profileImg: "https://placehold.co/40x40" },
			{ name: "그린조아", isAdmin: true, profileImg: "https://placehold.co/100x100" },
		]);
	}, []);

	return (
		<>
			<TopBarText left={LeftEnum.Back} center="새 채팅방" right="" />
			<ChatroomAddImgBtn>
				<img src={ChatroomImg} />
			</ChatroomAddImgBtn>
			<ChatCreateContainer>
				<div className="input--container">
					<p>채팅방 이름</p>
					<ChatroomName $nameLength={nameLength}>
						<Input
							placeholder="채팅방 이름"
							maxLength={15}
							onChange={(e) => {
								setNameLength(e.target.value.length);
							}}
						/>
						<span>{nameLength} / 15</span>
					</ChatroomName>
				</div>
				<div className="input--container">
					<p>
						<span className="invite title">멤버 초대</span>
						<span className="invite member--number">{invitedMemberList.length}</span>
					</p>
					<InviteInput placeholder="이름으로 검색해 보세요" />
				</div>
				<div className="input--container">
					<p>멤버 목록</p>
					{memberList.map((member, index) => (
						<Member
							key={index}
							onClick={() => {
								setInvitedMemberList([...invitedMemberList, member]);
								console.log(invitedMemberList);
							}}
						>
							<section>
								<img src={member.profileImg} />
								<span className="name">{member.name}</span>
								{member.isAdmin && <span className="admin">관리자</span>}
							</section>
							<input type="checkbox" />
						</Member>
					))}
				</div>
			</ChatCreateContainer>
		</>
	);
};

export default ChatCreatePage;
