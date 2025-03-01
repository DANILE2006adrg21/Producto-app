document.addEventListener("DOMContentLoaded", function() {
    const listaMotocicletas = document.getElementById('lista-motocicletas');
    const buscarInput = document.getElementById('buscar');
    const btnBuscar = document.getElementById('btn-buscar');

    // Datos de ejemplo (simulando una API)
    const motocicletas = [
        { nombre: 'Honda CBR 600', precio: '$15,000', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'Yamaha R6', precio: '$14,500', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'Kawasaki Ninja 400', precio: '$10,000', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'Ducati Panigale V4', precio: '$25,000', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'Suzuki GSX-R750', precio: '$12,000', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'BMW S1000RR', precio: '$18,000', imagen: 'https://via.placeholder.com/300' }
    ];

    // Función para mostrar las motocicletas
    function mostrarMotocicletas(motocicletas) {
        listaMotocicletas.innerHTML = '';
        motocicletas.forEach(motocicleta => {
            const div = document.createElement('div');
            div.className = 'motocicleta';
            div.innerHTML = `
                <img src="${motocicleta.imagen}" alt="${motocicleta.nombre}">
                <h2>${motocicleta.nombre}</h2>
                <p class="precio">${motocicleta.precio}</p>
                <p>Descripción breve de la motocicleta.</p>
            `;
            listaMotocicletas.appendChild(div);
        });
    }

    // Mostrar todas las motocicletas al cargar la página
    mostrarMotocicletas(motocicletas);

    // Función de búsqueda
    btnBuscar.addEventListener('click', () => {
        const textoBusqueda = buscarInput.value.toLowerCase();
        const motocicletasFiltradas = motocicletas.filter(motocicleta =>
            motocicleta.nombre.toLowerCase().includes(textoBusqueda)
        );
        mostrarMotocicletas(motocicletasFiltradas);
    });
});
