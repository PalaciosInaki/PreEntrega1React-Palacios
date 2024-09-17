const productos = [
    {
        nombre: "Grafica RTX 4080",
        id: 1,
        descripcion: "Tarjeta grafica gama media-alta",
        precio: 500,
        img: '../public/images/video-geforce-rtx-4080-16gb-msi-gaming-x-trio-0.jpg',
    },
    {
        nombre: "Pc Gamer Prearmada",
        id: 2,
        descripcion: "Compononentes Pre-seleccionados",
        precio: 1000,
        img: '../public/images/pc_amd-7401-b81b0560b78bd447e316373419933297-640-0.png',
    },
    {
        nombre: "Combo Perifericos Hyper X",
        id: 3,
        descripcion: "Kit de perifericos gamer primera marca",
        precio: 250,
        img: '../public/images/1019-producto-combo-hyperx-1321.jpg',
    },
    {
        nombre: "CPU Watercooling MSI",
        id: 4,
        descripcion: "Sistema de refrigeracion liquida MSI",
        precio: 500,
        img: '../public/images/imagen.jpg',
    },
    {
        nombre: "CPU Intel I9 9900k",
        id: 5,
        descripcion: "Procesador 8 nucleos, Velocidad de reloj 3.6 GHz",
        precio: 800,
        img: '../public/images/s-l1200.jpg',
    },
    {
        nombre: "RAM KINGSTON 16GB",
        id: 6,
        descripcion: "Memoria ram kingston 3200mhz",
        precio: 200,
        img: '../public/images/88f86d09-ad01-434c-8084-50547eb5e83b.ca6fade901fb02d0688b3239f4a13794.webp',
    },

]

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}


export const getUnProd = (id) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            const producto = productos.find(item => item.id === id)
            resolve(producto)
        }, 2000);
    })
}