import './App.css';
import Header from './components/Header/Header.jsx';
import ProfileContent from './components/Content/Profile/ProfileContent.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import Dialogs from './components/Content/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>{/*Помним, что надо обрамить все <BrowserRouter></BrowserRouter> */}
      <div className="App">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes> {/* Именно ROUTES */}
            <Route path="/dialogs" element={<Dialogs
              dialogPage={props.state.dialogPage}
              dispath={props.dispath} />} />

            <Route path="/profile" element={<ProfileContent
              profilePage={props.state.profilePage}
              dispath={props.dispath} />} />
          </Routes>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
