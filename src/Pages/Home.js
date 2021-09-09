import MotionHoc from "./MotionHoc";
import React, { useState, useEffect } from "react";
import "./Todo.css";

function Task({ task, index, doneTask, hapusTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}

      <button style={{ background: "red" }} onClick={() => hapusTask(index)}>
        x
      </button>
      <button onClick={() => doneTask(index)}>Selesai</button>
    </div>
  );
}
function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Masih Kosong!!!!");
      return;
    }
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Buat Tugas Baru"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
const HomeComponent = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: "Makan",
      completed: true,
    },
    {
      title: "Mandi",
      completed: false,
    },
    {
      title: "Kerjain Tugas",
      completed: true,
    },
    {
      title: "Me Time",
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const doneTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const hapusTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div className="todo-container">
      <h1 style={{ textAlign: "center" }}>ToDoS</h1>
      <div className="header">Pending tasks ({tasksRemaining})</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            doneTask={doneTask}
            hapusTask={hapusTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
