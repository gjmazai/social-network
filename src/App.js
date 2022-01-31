import './App.css';
import Header from './components/Header/Header.jsx';
import ProfileContent from './components/Content/Profile/ProfileContent.jsx';
import NavBar from './components/Navbar/NavBar.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      {/* <ProfileContent /> */}
      <Dialogs />
    </div>
  );
}

export default App;
