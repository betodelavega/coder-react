/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { getDoc, doc } from 'firebase/firestore';
import Loader from '../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idItem } = useParams();

  const getItem = async () => {
    const docRef = doc(db, 'productos', idItem);
    const docSnap = await getDoc(docRef);

    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  };

  useEffect(() => {
    setLoading(true);
    getItem().then((res) => {
      setItem(res);
      setLoading(false);
    });
  }, [idItem]);

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Mi Producto</h2>
      {loading ? <Loader /> : <ItemDetail item={item} />}
    </>
  );
};

export default ItemListContainer;
