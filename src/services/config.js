import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6r6lP0d-c26HmhWvNYbGPTvGHCQbdZu8",
  authDomain: "proyec-react-ecommerce-moto.firebaseapp.com",
  projectId: "proyec-react-ecommerce-moto",
  storageBucket: "proyec-react-ecommerce-moto.firebasestorage.app",
  messagingSenderId: "579672233335",
  appId: "1:579672233335:web:4e1f5adf99ac267368fd72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//funcion para subir productos automaticos
const productos = [
  {
    nombre: "Casco",
    precio: 1000,
    stock: 10,
    img: "/public/img/casco.jpg",
    descripcion: "Casco  moto",
    idCategoria: "Accesorios",
  },
  {
    nombre: "Guantes",
    precio: 500,
    stock: 10,
    img: "/public/img/guantes.webp",
    descripcion: "Guantes de moto",
    idCategoria: "Accesorios",
  },
  {
    nombre: "amortiguadores",
    precio: 2000,
    stock: 10,
    img: "/public/img/amortiguadores.webp",
    descripcion: "Amortiguadores de moto",
    idCategoria: "Repuestos",
  },
  {
    nombre: "Frenos",
    precio: 1500,
    stock: 10,
    img: "/public/img/frenos.webp",
    descripcion: "Frenos de moto",
    idCategoria: "Repuestos",
  },
  {
    nombre: "Escape",
    precio: 3000,
    stock: 10,
    img: "/public/img/escape.webp",
    descripcion: "Escape de moto",
    idCategoria: "Repuestos",
  },
  {
    nombre: "Cubiertas",
    precio: 4000,
    stock: 10,
    img: "/public/img/cubiertas.jpg",
    descripcion: "Cubiertas de moto",
    idCategoria: "Repuestos",
  },
  {
    nombre: "Bateria",
    precio: 2000,
    stock: 10,
    img: "/public/img/bateria.jpg",
    descripcion: "Bateria de moto",
    idCategoria: "Repuestos",
  },
  {
    nombre: "Aceite",
    precio: 500,
    stock: 10,
    img: "/public/img/aceite.webp",
    descripcion: "Aceite de moto",
    idCategoria: "Repuestos",
  },
  {
    nombre: "Cadena",
    precio: 300,
    stock: 10,
    img: "/public/img/cadena.webp",
    descripcion: "Cadena de moto",
    idCategoria: "Repuestos",
  },
  {
    nombre: "Cubre tanque",
    precio: 200,
    stock: 10,
    img: "/public/img/cubreTanque.jpg",
    descripcion: "Cubre tanque de moto",
    idCategoria: "Accesorios",
  },
  {
    nombre: "Cubre asiento",
    precio: 300,
    stock: 10,
    img: "/public/img/cubreAsiento.webp",
    descripcion: "Cubre asiento de moto",
    idCategoria: "Accesorios",
  },
];

import { collection, doc, writeBatch } from "firebase/firestore";

const subirProductos = async (productos) => {
  console.log('SUBIR PRODUCTOS');
  // const batch = writeBatch(db);
  // productos.forEach((obj) => {
  //   const docRef = doc(collection(db, "productos"));
  //   batch.set(docRef, obj);
  // });
  // await batch.commit();
  console.log("Productos subidos a Firebase");
};

export default subirProductos;
subirProductos(productos);