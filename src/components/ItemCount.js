import React from 'react';
import { useState } from 'react';

    

import './ItemCount.css';

const ItemCount = ({ onAdd, initial, stock }) => {

  const [count, setCount] = useState(initial);

 
  const addProduct = (num) => {
    setCount(count + num);
  };

  return (
    <div className="countContainer">
      <div className="countContador">
        <button
          className="countButton"
          onClick={() => addProduct(-1)}
        
          disabled={count === initial}
        >
          -
        </button>
        <span className="count-container__count">{count}</span>
        <button
          className="countButton"
          onClick={() => addProduct(+1)}
          disabled={count === stock}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => {
          onAdd(count);
        }}
        disabled={stock === 0 ? true : null}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;