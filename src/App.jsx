import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState(''); // Armazena a tarefa digitada
  const [tasks, setTasks] = useState([]); // Armazena a lista de tarefas

  // Função para adicionar a tarefa
  const handleAddTask = () => {
    setTasks([...tasks, { name: task, isDone: false }]); // Adiciona a tarefa
    setTask(''); // Limpa o campo de input
  };

  // Função para marcar a tarefa como concluída
  const handleCheckTask = (index) => {
    const newTasks = [...tasks]; // Cria uma cópia da lista de tarefas
    newTasks[index].isDone = !newTasks[index].isDone; // Altera o estado da tarefa
    setTasks(newTasks); // Atualiza a lista de tarefas
  };

  return (
    <div className="container">
      <h1 className="nome-check">Check List</h1>

      <div className="top">
        <input
          type="text"
          className="input-task"
          value={task} // Valor atual do input
          onChange={(e) => setTask(e.target.value)} // Atualiza o estado do input
          placeholder="Digite a tarefa..."
        />
        <button className="button" onClick={handleAddTask}>Adicionar</button>
      </div>

      <div className="box">
        <ul>
          {/* Exibe as tarefas como uma lista */}
          {tasks.map((taskItem, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={taskItem.isDone} // Marca como concluída se true
                onChange={() => handleCheckTask(index)} // Marca/desmarca a tarefa
              />
              <span style={{ textDecoration: taskItem.isDone ? 'line-through' : 'none' }}>
                {taskItem.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
