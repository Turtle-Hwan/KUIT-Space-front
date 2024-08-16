import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: x-large;
  gap: 3rem;
`;

const HomePage = () => {
  return (
    //test Link
    <LinkContainer>
      <h1>Home page link 모음 입니다</h1>
      <Link to="/voiceroom">voiceroom link</Link>
      <Link to="/chat">chatting room link</Link>
      <Link to="/space">space room link</Link>
      <Link to="/login">Login</Link>
    </LinkContainer>
  );
};

export default HomePage;
