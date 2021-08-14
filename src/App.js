import React from 'react';
import {NavBar} from './components/navBar/navBar.js';
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer.js';
import {ItemDetails} from './containers/ItemDetails/ItemDetail.js'

function App(){
    return ( <div>
        <NavBar/>
        <ItemListContainer/>
        <ItemDetails/>
    </div>)
}
export default App;