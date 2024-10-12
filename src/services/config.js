
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhErBn6yaVNxx_vMRrGMnEPErhDcRPln8",
  authDomain: "entrega-react-faa5b.firebaseapp.com",
  projectId: "entrega-react-faa5b",
  storageBucket: "entrega-react-faa5b.appspot.com",
  messagingSenderId: "28711423813",
  appId: "1:28711423813:web:5cdf53eeac4ded31eb782c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db= getFirestore(app)


/* ////////////////////////////////////////////////////////////// */

const misProductos = [
    {
        nombre: "Grafica RTX 4080",
        stock: 11,
        descripcion: "Tarjeta grafica gama media-alta",
        precio: 500,
        img: '../public/images/video-geforce-rtx-4080-16gb-msi-gaming-x-trio-0.jpg',
        idCat:"componentes"
    },
    {
        nombre: "Pc Gamer Prearmada",
        stock: 5,
        descripcion: "Compononentes Pre-seleccionados",
        precio: 1000,
        img: '../public/images/pc_amd-7401-b81b0560b78bd447e316373419933297-640-0.png',
        idCat:"computadoras"
    },
    {
        nombre: "Combo Perifericos Hyper X",
        stock: 10,
        descripcion: "Kit de perifericos gamer primera marca",
        precio: 250,
        img: '../public/images/1019-producto-combo-hyperx-1321.jpg',
        idCat:"perifericos"
    },
    {
        nombre: "CPU Watercooling MSI",
        stock: 8,
        descripcion: "Sistema de refrigeracion liquida MSI",
        precio: 500,
        img: '../public/images/imagen.jpg',
        idCat:"componentes"
    },
    {
        nombre: "CPU Intel I9 9900k",
        stock: 5,
        descripcion: "Procesador 8 nucleos, Velocidad de reloj 3.6 GHz",
        precio: 800,
        img: '../public/images/s-l1200.jpg',
        idCat:"componentes"
    },
    {
        nombre: "RAM KINGSTON 16GB",
        stock: 12,
        descripcion: "Memoria ram kingston 3200mhz",
        precio: 200,
        img: '../public/images/88f86d09-ad01-434c-8084-50547eb5e83b.ca6fade901fb02d0688b3239f4a13794.webp',
        idCat:"componentes"
    },

]

import {collection, doc, writeBatch} from 'firebase/firestore'

const subirProductos = async () => {
    const batch = writeBatch(db)
    const productosRef = collection(db, "productos")

    misProductos.forEach((producto)=>{
        const nuevoDoc = doc(productosRef) /* Crea un nuevo doc con id automatico */
        batch.set(nuevoDoc, producto)/* Agrega la operacion de escritura al batch */
    })


    try{
        await batch.commit();
        console.log('Productos subidos exitosamente')
    } catch(error){
        console.log('error', error)
    }

}

/* subirProductos */
