import './App.css';
import Header from './components/Header/Header.jsx';
import ProfileContent from './components/Content/Profile/ProfileContent.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import Dialogs from './components/Content/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div class="app-wrapper-content">
          <Routes> {/* Именно ROUTES */}
            <Route path="/dialogs" element={<Dialogs />} /> {/*Помним, что надо обрамить 
        все <BrowserRouter></BrowserRouter> */}

            <Route path="/profile" element={<ProfileContent />} />
            {/* <ProfileContent /> */}
            {/* <Dialogs /> */}
          </Routes>
        </div>
      </div >
    </BrowserRouter>
  );
}

export default App;
