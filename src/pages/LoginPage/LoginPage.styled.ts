import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
	max-width: 22.5rem;
	margin: auto;
`;

export const Logo = styled.div`
	display: flex;
	width: 38.89%;
`;

export const Input = styled.input`
	display: flex;
	width: 88.89%;
	height: 3.25rem;
	border-radius: 0.75rem;
	padding: 0.9375rem;
	padding-left: 1rem;
	border: 1px solid transparent;
	background-color: #222226;
	font-family: Freesentation;
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: 140%;
	letter-spacing: 0.04rem;
	color: #ffffff;
	caret-color: #48ffbd;
	margin-top: 1rem;

	&::placeholder {
		color: #767681;
	}

	&:focus {
		border-color: #48ffbd;
		outline: none;
	}
`;

interface LoginButtonProps {
	$isActive: boolean;
}

export const LoginButton = styled.button<LoginButtonProps>`
	display: flex;
	width: 88.89%;
	height: 3.25rem;
	padding: 0.875rem 0 0.8125rem 0;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
	background-color: ${({ $isActive }) => ($isActive ? "#48FFBD" : "#45454B")};
	color: ${({ $isActive }) => ($isActive ? "#171719" : "#ACACB5")};
	border-radius: 0.75rem;
	font-family: Freesentation;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 700;
	line-height: 140%;
	letter-spacing: 0.045rem;
	cursor: ${({ $isActive }) => ($isActive ? "pointer" : "default")};
`;

export const BtContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.25rem;
	width: 83.33%;
`;

export const Button = styled.button`
	display: flex;
	width: 6.25rem;
	height: 2.75rem;
	justify-content: center;
	align-items: center;
	color: #767681;
	text-align: center;
	font-family: Freesentation;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: 140%;
	letter-spacing: 0.035rem;
	cursor: pointer;
`;

export const ScContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 1.6875rem;
	width: 45.56%;
	gap: 1rem;
`;

export const Social = styled.button`
	display: flex;
	width: 2.75rem;
	height: 2.75rem;
	cursor: pointer;
	border-radius: 0.5rem;
	overflow: hidden;
`;
