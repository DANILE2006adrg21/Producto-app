document.addEventListener("DOMContentLoaded", function() {
    // Datos de ejemplo (simulando una API)
    const motocicletas = [
        { nombre: 'Honda CBR 600', precio: '$15,000' },
        { nombre: 'Yamaha R6', precio: '$14,500' },
        { nombre: 'Kawasaki Ninja 400', precio: '$10,000' }
    ];

    const motocicletasList = document.getElementById('motocicletas-list');

    // Mostrar las motocicletas en la lista
    motocicletas.forEach(motocicleta => {
        const li = document.createElement('li');
        li.textContent = `${motocicleta.nombre} - ${motocicleta.precio}`;
        motocicletasList.appendChild(li);
    });
});
