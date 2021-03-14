import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import { gerneratePalette } from './colorHelper';
import { Route, Switch } from 'react-router';

import PaletteList from './PaletteList';

function App() {
  const findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={seedColors} />}
      />
      <Route
        exact
        path="/palette/:id/"
        render={(routeProps) => (
          <Palette
            palette={gerneratePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      {/* <Palette
         
          palette={findPalette()}
        /> */}

      {/* <div className="App">
        <Palette Palette={gerneratePalette(seedColors[4])} />
      </div> */}
    </Switch>
  );
}

export default App;
