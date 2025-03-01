const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Datos de ejemplo (simulando una base de datos)
let motocicletas = [
    { id: 1, nombre: 'Honda CBR 600', precio: '$15,000' },
    { id: 2, nombre: 'Yamaha R6', precio: '$14,500' },
    { id: 3, nombre: 'Kawasaki Ninja 400', precio: '$10,000' }
];

// Ruta para obtener todas las motocicletas
app.get('/api/motocicletas', (req, res) => {
    res.json(motocicletas);
});

// Ruta para agregar una motocicleta
app.post('/api/motocicletas', (req, res) => {
    const nuevaMotocicleta = {
        id: motocicletas.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    motocicletas.push(nuevaMotocicleta);
    res.status(201).json(nuevaMotocicleta);
});

// Ruta para actualizar una motocicleta
app.put('/api/motocicletas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const motocicleta = motocicletas.find(m => m.id === id);
    if (!motocicleta) {
        return res.status(404).json({ mensaje: 'Motocicleta no encontrada' });
    }
    motocicleta.nombre = req.body.nombre || motocicleta.nombre;
    motocicleta.precio = req.body.precio || motocicleta.precio;
    res.json(motocicleta);
});

// Ruta para eliminar una motocicleta
app.delete('/api/motocicletas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    motocicletas = motocicletas.filter(m => m.id !== id);
    res.status(204).send();
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
