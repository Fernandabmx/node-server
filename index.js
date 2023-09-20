const express = require('express');
const app = express();

const tasks = [
  { id: 1, description: 'Hacer la compra', completed: false },
  { id: 2, description: 'Hacer ejercicio', completed: true },
  { id: 3, description: 'Estudiar para el examen', completed: false }
];

app.get('/', (req, res) => {
  res.send('Bienvenido a mi servidor de tareas.');
});

app.get('/tasks', (req, res) => {
  res.json({ tasks });
});
app.post('/tasks', (req, res) => {
    const newTask = req.body; // Aquí se asume que el cuerpo de la solicitud contiene la nueva tarea
    tasks.push(newTask);
    res.json({ message: 'Nueva tarea añadida', tasks });
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
