import './Item.css'

import Button from 'react-bootstrap/Button';
import React from 'react';

import ItemCount from './ItemCount';

const Item = ({ name, price, thumbnail, stock, id}) => {
    const onAdd = (count) =>{
        alert( `has agregado ${count} a tu carrito`);
    }
      
        return ( 
          
              <div className='Container'>
                <main className='grid'>
                  <article>
                      <img src={thumbnail} alt=""/>
                      <div className='text'>
                        <h2>{name}</h2>
                        <p className='ProductPrice'>$ {price}</p>
                        <Button variant='info'>Ver Detalle</Button>
                        <ItemCount stock={stock} onAdd={onAdd} initial={1}></ItemCount>
                      </div>
                  </article>
                  
                </main>
                
              </div>
          
          
          
        )
      
};



export default Item;