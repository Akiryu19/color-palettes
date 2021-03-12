import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { gerneratePalette } from './colorHelper';

function App() {
  console.log(gerneratePalette(seedColors[1]));
  return (
    <div className="App">
      <Palette Palette={gerneratePalette(seedColors[1])} />
    </div>
  );
}

export default App;
