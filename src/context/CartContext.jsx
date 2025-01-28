import { useState, createContext } from 'react';

export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CartProvider = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const agregarAlCarrito = (item) => {
    const productoExistente = carrito.find((prod) => prod.id === item.id);
    if (productoExistente) {
      productoExistente.cantidad += item.cantidad;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, item]);
    }
  };
};
