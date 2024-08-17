import {
  createBrowserRouter,
  matchPath,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import BottomNavBar from "@/components/BottomNavBar";
import BoardPage from "@/pages/BoardPage/BoardPage";
import ChatCreatePage from "@/pages/ChatPage/ChatCreatePage/ChatCreatePage";
import ChatPage from "@/pages/ChatPage/ChatPage";
import ChatSettingPage from "@/pages/ChatPage/ChatSettingPage/ChatSettingPage";
import ChattingPage from "@/pages/ChatPage/ChattingPage/ChattingPage";
import HomePage from "@/pages/HomePage/HomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import SignUpPage from "@/pages/LoginPage/SignUpPage";
import CompletePay from "@/pages/PayPage/CompletePay";
import CreateRequestPage from "@/pages/PayPage/CreateRequestPage";
import MyRequestPayPage from "@/pages/PayPage/MyRequestPayPage";
import PayPage from "@/pages/PayPage/PayPage";
import RequestedPayPage from "@/pages/PayPage/RequestedPayPage";
import AccountManage from "@/pages/SpacePage/AccountManage";
import AddSpacePage from "@/pages/SpacePage/AddSpacePage";
import AlarmManage from "@/pages/SpacePage/AlarmManage";
import ProfileManage from "@/pages/SpacePage/ProfileManage";
import SpaceOption from "@/pages/SpacePage/SpaceOption";
import SpacePage from "@/pages/SpacePage/SpacePage";
import CreateVoiceRoomPage from "@/pages/VoiceRoomPage/CreateVoiceRoom";
import EditVoiceRoomPage from "@/pages/VoiceRoomPage/EditVoiceRoomPage";
import JoinVoiceRoomPage from "@/pages/VoiceRoomPage/JoinVoiceRoomPage";
import VoiceRoomListPage from "@/pages/VoiceRoomPage/VoiceRoomListPage";
import VoiceRoomPage from "@/pages/VoiceRoomPage/VoiceRoomPage";
import GlobalStyle from "@/styles/GlobalStyles";
import { theme } from "@/styles/Theme";

import ChatSettingPage from "./pages/ChatPage/ChatSettingPage/ChatSettingPage";
import CompletePay from "./pages/PayPage/CompletePay";
import CreateRequestPage from "./pages/PayPage/CreateRequestPage";
import MyRequestPayPage from "./pages/PayPage/MyRequestPayPage";
import RequestedPayPage from "./pages/PayPage/RequestedPayPage";
import AccountManage from "./pages/SpacePage/AccountManage";
import AddSpacePage from "./pages/SpacePage/AddSpacePage";
import AlarmManage from "./pages/SpacePage/AlarmManage";
import ProfileManage from "./pages/SpacePage/ProfileManage";
import SpaceOption from "./pages/SpacePage/SpaceOption";
import SpacePage from "./pages/SpacePage/SpacePage";
import CreateVoiceRoomPage from "./pages/VoiceRoomPage/CreateVoiceRoom";
import EditVoiceRoomPage from "./pages/VoiceRoomPage/EditVoiceRoomPage";
import JoinVoiceRoomPage from "./pages/VoiceRoomPage/JoinVoiceRoomPage";
import VoiceRoomPage from "./pages/VoiceRoomPage/VoiceRoomPage";
import InviteSpace from "./pages/SpacePage/InviteSpace";
import LoginModal from "./pages/LoginPage/LoginModal";

// will we need constant path in later..?
// const PATH = {
// 	HOME: "/",
// 	LOGIN: "/login",
// 	SIGNUP: "/signUp",
// 	VOICEROOM: "/voiceroom",
// 	CHAT: "/chat",
// 	CHAT_ID: "/chat/:id",
// 	CHAT_CREATE: "/chat/create",
// 	PAY: "/pay",
// 	BOARD: "/board",
// };

const LayoutContainer = styled.div`
  position: relative;
  min-width: 360px;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;

  #content {
    min-height: calc(100vh - 3.75rem);
  }
`;

interface RouteChildren {
  path: string;
  element: JSX.Element;
  hasBottomBar?: boolean;
}

function Layout({ routes_children }: { routes_children: RouteChildren[] }) {
  const { pathname } = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutContainer>
        <div id="content">
          <Outlet />
          <LoginModal />
        </div>
        {routes_children.find((child) => matchPath(child.path, pathname))?.hasBottomBar && (
          <BottomNavBar />
        )}
      </LayoutContainer>
    </ThemeProvider>
  );
}

function App() {
  const routes_children_chat = [
    { path: "/chat", element: <ChatPage />, hasBottomBar: true },
    { path: "/chat/:id", element: <ChattingPage /> },
    { path: "/chat/:id/setting", element: <ChatSettingPage /> },
    { path: "/chat/create", element: <ChatCreatePage /> },
  ];

  const routes_children_pay = [
    { path: "/pay", element: <PayPage />, hasBottomBar: true },
    { path: "/pay/create", element: <CreateRequestPage />, hasBottomBar: false },
    { path: "/requestingpay", element: <MyRequestPayPage />, hasBottomBar: false },
    { path: "/requestingpay/:id", element: <MyRequestPayPage />, hasBottomBar: false },
    { path: "/requestedpay", element: <RequestedPayPage />, hasBottomBar: false },
    { path: "/completepay", element: <CompletePay />, hasBottomBar: false },
  ];

  const routes_children_voice = [
    { path: "/voiceroom", element: <VoiceRoomListPage />, hasBottomBar: true },
    { path: "/createvoiceroom", element: <CreateVoiceRoomPage />, hasBottomBar: false },
    { path: "/joinvoiceroom", element: <JoinVoiceRoomPage />, hasBottombar: false },
    { path: "/editvoiceroom", element: <EditVoiceRoomPage />, hasBottombar: false },
  ];

  const routes_children_space = [
    { path: "/space", element: <SpacePage /> },
    { path: "/space/addspace", element: <AddSpacePage /> },
    { path: "/space/spaceoption", element: <SpaceOption /> },
    { path: "/space/spaceoption/accountmanage", element: <AccountManage /> },
    { path: "/space/spaceoption/profilemanage", element: <ProfileManage /> },
    { path: "/space/spaceoption/alarmmanage", element: <AlarmManage /> },
    { path: "/invite", element: <InviteSpace /> },
    { path: "/createvoiceroom", element: <CreateVoiceRoomPage />, hasBottomBar: false },
    { path: "/joinvoiceroom", element: <JoinVoiceRoomPage />, hasBottombar: false },
    { path: "/editvoiceroom", element: <EditVoiceRoomPage />, hasBottombar: false },
  ];

  const routes_children_login = [
    { path: "/login", element: <LoginPage />, hasBottombar: false },
    { path: "/signup", element: <SignUpPage />, hasBottombar: false },
  ];

  const routes_children = [
    { path: "/", element: <HomePage />, hasBottomBar: true },
    { path: "/board", element: <BoardPage />, hasBottomBar: true },
    ...routes_children_chat,
    ...routes_children_pay,
    ...routes_children_voice,
    ...routes_children_space,
    ...routes_children_login,
  ];

  const routes = [
    {
      element: <Layout routes_children={routes_children} />,
      children: routes_children,
    },
  ];

  const router = createBrowserRouter(routes, { basename: "/KUIT-Space-front/" });
  return <RouterProvider router={router} />;
}

export default App;
