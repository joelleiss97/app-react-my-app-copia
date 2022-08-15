
import './ItemListContainer.css'
import ItemList from './ItemList';


function ItemListContainer(props) {
  return(
    <section>
        <div className='SubTitulo'>
            <h1>{props.titulo}</h1>

            <ItemList></ItemList>
        </div>
       
    </section>
     
  );
};

export default ItemListContainer;
