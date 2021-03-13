import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { gerneratePalette } from './colorHelper';

function App() {
  // console.log(gerneratePalette(seedColors[0]));
  return (
    <div className="App">
      <Palette Palette={gerneratePalette(seedColors[4])} />
    </div>
  );
}

export default App;
