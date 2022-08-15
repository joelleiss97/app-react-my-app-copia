import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

// importo los componentes creados
import Home from './components/Home';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import NavBarExample from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarExample/>}>
            <Route path='Home' element={<Home />} />
            <Route path='Productos' element={<Productos />} />
            <Route path='Contacto' element={<Contacto />} />

            <Route path='*' element={<Navigate replace to='/' />} />
            

          </Route>
        </Routes>
        <ItemListContainer titulo='Nuestros Productos ♥'></ItemListContainer>
        <Body></Body>
      </BrowserRouter>
      
      
       
        
    </div>
  );
}

export default App;
