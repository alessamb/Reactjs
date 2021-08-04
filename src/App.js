import React from 'react';
import {NavBar} from './components/navBar';
import {ItemListContainer} from './containers/ItemListContainer.js';

function App(){
    return ( <div>
        <NavBar/>
        <ItemListContainer/>
    </div>)
}
export default App;