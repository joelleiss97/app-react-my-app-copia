import { useEffect, useState } from 'react';
import {productDonuts} from '../data/Data.js';
import Item from './Item';
import './ItemList.css';

const ItemList = () => {

    const [products, setProduct] = useState([]);

    const getProducts = new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(true){
                resolve(productDonuts);
            } else{
                reject ('ha ocuurido un error');
            }
        },);
    });

    const getProductDonut = async () => {
        try{
            const result = await getProducts;
            setProduct(result);
        }catch(error){
            console.error(error);
            alert('no se puede mostrar los productos');
        }

    };
    
    useEffect(() => {
        getProductDonut ();
    },[]);
    
    return(
        <div>
            {
                products.length ? (
                    <>
                    {
                        products.map((product) =>{
                            return(
                                <Item
                                key={product.id}
                                name={product.name}
                                thumbnail={product.thumbnail}
                                price={product.price}
                                stock={product.prece}
                                id={product.id}
                                />
                            ); 
                        })
                    }
                    </>
                ) : (
                    <p>Cargando Productos</p>
                )
            };
        </div>
    );





};


export default ItemList;