import React from 'react';
import {NavBar} from './components/navBar/navBar.js';
import {ItemListContainer} from './containers/ItemListContainer.js';

function App(){
    return ( <div>
        <NavBar/>
        <ItemListContainer/>
    </div>)
}
export default App;