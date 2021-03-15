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
        render={(routeProps) => (
          <PaletteList palettes={seedColors} {...routeProps} />
        )}
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
      <Route
        path="/palette/:id/:colorID"
        render={() => <h1>Single Color</h1>}
      />
    </Switch>
  );
}

export default App;
