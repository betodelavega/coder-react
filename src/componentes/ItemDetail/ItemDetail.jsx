import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const ItemDetail = ({ item }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  //Creamos un estado local con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //Creamos una función manejadora de la cantidad:

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const itemCart = { id: item.id, nombre: item.nombre, precio: item.precio };
    agregarAlCarrito(itemCart, cantidad);
    toast.success('Su compra fue enviada al carrito', {
      autoClose: 1000,
      theme: 'dark',
      position: 'top-center',
    });
  };

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {item.nombre} </h2>
      <h3>Precio: {item.precio} </h3>
      <h3>ID: {item.id} </h3>
      <img src={item.img} alt={item.nombre} />
      <p> {item.descripcion}</p>

      {
        //Acá empleamos la lógica de montaje y desmontaje del contador
      }

      {agregarCantidad > 0 ? (
        <Link to='/cart'>Terminar Compra</Link>
      ) : (
        <Contador
          inicial={1}
          stock={item.stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
