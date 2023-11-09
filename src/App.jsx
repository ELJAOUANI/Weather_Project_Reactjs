
import { Container } from 'react-bootstrap';
import style from './App.module.scss';
import SearchBar from './Components/SearchBar/SearchBar';
import Wallpeper from './Components/Wallpaper/Wallpaper';
import Weather from './Components/Weather/Weather';




function App() {
  return (
    <div className={style.app}>
      <Wallpeper/>
      <Container>
      <SearchBar/>
      <Weather/>
      </Container>
    
    </div>
  );
}

export default App;
