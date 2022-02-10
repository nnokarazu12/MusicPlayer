import './App.css';
import Banner from './components/Banner';
import Audio from './components/Audio';
import Playlist from './components/Playlist';


function App() {
  return (
    <div id="view-container">
      <Banner/>
      <Audio/>
      <Playlist/>
    </div>
  );
}

export default App;
