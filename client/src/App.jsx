import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatArea from "./Components/ChatArea";
import CreateGroup from "./Components/CreateGroup";
import Login from "./Components/Login";
import MainContainer from "./Components/MainContainer";
import Online_Groups from "./Components/Online_Groups";
import Online_Users from "./Components/Online_Users";
import WelcomePage from "./Components/WelcomePage";
function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-300">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<WelcomePage />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="Users" element={<Online_Users />}></Route>
          <Route path="groups" element={<Online_Groups />}></Route>
          <Route path="create-groups" element={<CreateGroup />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
