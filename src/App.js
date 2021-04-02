import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';
import seedColors from './seedColors';
import { gerneratePalette } from './colorHelper';

function App() {
  //check localstorage
  const savePalettes = JSON.parse(window.localStorage.getItem('palettes'));
  const [palettes, setPalettes] = useState(savePalettes || seedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id;
    });
  };
  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  const deletePalette = (id) => {
    setPalettes(palettes.filter((palette) => palette.id !== id));
    syncLocalStorage();
  };

  //save palettes to local storage
  const syncLocalStorage = () => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  };

  useEffect(() => {
    syncLocalStorage();
  }, [palettes]);

  return (
    // <Route
    //   render={({ location }) => (
    //     <TransitionGroup>
    //       <CSSTransition timeout={500} classNames="page" key={location.key}>
    <Switch>
      <Route
        exact
        path="/color-palettes/palette/new"
        render={(routeProps) => (
          <Page>
            <NewPaletteForm
              savePalette={savePalette}
              palettes={palettes}
              {...routeProps}
            />
          </Page>
        )}
      />
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <Page>
            <PaletteList
              palettes={palettes}
              {...routeProps}
              deletePalette={deletePalette}
            />
          </Page>
        )}
      />
      <Route
        exact
        path="/color-palettes/palette/:id/"
        render={(routeProps) => (
          <Page>
            <Palette
              palette={gerneratePalette(
                findPalette(routeProps.match.params.id)
              )}
            />
          </Page>
        )}
      />

      <Route
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <Page>
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={gerneratePalette(
                findPalette(routeProps.match.params.paletteId)
              )}
            />
          </Page>
        )}
      />
      <Route
        render={(routeProps) => (
          <Page>
            <PaletteList
              palettes={palettes}
              {...routeProps}
              deletePalette={deletePalette}
            />
          </Page>
        )}
      />
    </Switch>
    //       </CSSTransition>
    //     </TransitionGroup>
    //   )}
    // />
  );
}
//待解决：加了CSSTransition之后会产生rerender twice

export default App;
