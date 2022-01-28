import './App.css';
import Footer from './Footer';
import Header from './Header';
import Technologies from './Technologies';

const App = () => {
  return (
    <div className="App">

      <img src="https://sun9-83.userapi.com/impf/c830509/v830509941/1c2061/OQrjEyPRGBg.jpg?size=400x399&quality=96&sign=805858948d996bd5ad859037d0b7e750&type=album"
        className="App-logo" alt="logo" />
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
