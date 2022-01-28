import './App.css';
import Header from './Header.jsx';
import MainContent from './MainContent.jsx';
import NavBar from './NavBar.jsx';

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
