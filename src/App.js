import './App.css';
import Header from './components/Header/Header.jsx';
import ProfileContentContainer from './components/Content/Profile/ProfileContentContainer';
import NavBar from './components/Navbar/NavBar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Content/Dialogs/WindowDialog/DialogsContainer';
import UsersContainer from "./components/Content/Users/UsersContainer"

const App = () => {
  debugger;
  return (
    <BrowserRouter>{/*Помним, что надо обрамить все <BrowserRouter></BrowserRouter> */}
      <div className="App">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes> {/* Именно ROUTES */}
            <Route path="/dialogs" element={<DialogsContainer />} />

            <Route path="/profile" element={<ProfileContentContainer />} />

            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
