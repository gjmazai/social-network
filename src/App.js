import './App.css';
import Header from './components/Header/Header.jsx';
import MainContent from './components/Content/MainContent.jsx';
import NavBar from './components/Navbar/NavBar.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
