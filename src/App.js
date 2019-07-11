import React from 'react';
import {Provider} from "react-redux"
import store from "./redux/store"
import Jugadores from "./components/jugadores"
import EquipoSeleccionado from './components/EquipoSeleccionado';


//<EquipoSeleccionado></EquipoSeleccionado>

const App = () => (
  <Provider store={store}>
    <main>
      <h2>Administrador</h2>
      <Jugadores></Jugadores>
      <EquipoSeleccionado></EquipoSeleccionado>
    </main>
  </Provider>
  
) 

export default App;
