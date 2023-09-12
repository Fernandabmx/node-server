const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function listarTareas() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    const status = task.completada ? 'Completada' : 'No Completada';
    console.log(`${index + 1}. [${status}] - ${task.descripcion}`);
  });
}

function agregarTarea(descripcion) {
  tasks.push({ descripcion, completada: false });
  console.log(`Tarea "${descripcion}" agregada.`);
}

function eliminarTarea(indice) {
  if (indice >= 1 && indice <= tasks.length) {
    const tareaEliminada = tasks.splice(indice - 1, 1);
    console.log(`Tarea "${tareaEliminada[0].descripcion}" eliminada.`);
  } else {
    console.log('Índice de tarea no válido.');
  }
}

function completarTarea(indice) {
  if (indice >= 1 && indice <= tasks.length) {
    tasks[indice - 1].completada = true;
    console.log(`Tarea marcada como completada.`);
  } else {
    console.log('Índice de tarea no válido.');
  }
}

rl.setPrompt('¿Qué quieres hacer? (listar/agregar/eliminar/completar/salir) ');
rl.prompt();

rl.on('line', (line) => {
  const input = line.trim().toLowerCase().split(' ');

  switch (input[0]) {
    case 'listar':
      listarTareas();
      break;
    case 'agregar':
      agregarTarea(input.slice(1).join(' '));
      break;
    case 'eliminar':
      eliminarTarea(parseInt(input[1]));
      break;
    case 'completar':
      completarTarea(parseInt(input[1]));
      break;
    case 'salir':
      rl.close();
      break;
    default:
      console.log('Comando no válido.');
  }
  rl.prompt();
});

rl.on('close', () => {
  console.log('¡Hasta luego!');
  process.exit(0);
});
