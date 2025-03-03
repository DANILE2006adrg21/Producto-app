document.addEventListener("DOMContentLoaded", function() {
    const listaMotocicletas = document.getElementById('lista-motocicletas');
    const buscarInput = document.getElementById('buscar');
    const btnBuscar = document.getElementById('btn-buscar');

    // Datos de ejemplo (simulando una API)
    const motocicletas = [
        { nombre: 'Ducati Panigale V4', precio: '$25,000', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'Aprilia RSV4', precio: '$22,000', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'MV Agusta F4', precio: '$30,000', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'Moto Guzzi V7', precio: '$10,000', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'Benelli TNT 600', precio: '$8,000', imagen: 'https://via.placeholder.com/300' },
        { nombre: 'Bimota Tesi H2', precio: '$50,000', imagen: 'https://via.placeholder.com/300' }
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

        // Animación de entrada
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.motocicleta').forEach(motocicleta => {
            observer.observe(motocicleta);
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
