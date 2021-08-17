import React from 'react';
import { NavBar } from './components/navBar/navBar.js';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from './containers/ItemDetailContainer/itemDetailContainer.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (<div>
        <BrowserRouter>
            <NavBar />
            <ItemListContainer />
        
             <Switch>
                <Route path="/Saludable/ItemDetailContainer/:productoID" component={ItemDetailContainer} />
            </Switch> 
        </BrowserRouter>


    </div>)
}
export default App;