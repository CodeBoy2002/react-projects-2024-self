import React, { useState } from "react";

const TaskCompleted = () => {
  const [tasks, setTasks] = useState({ title: "", description: "", due: "" });
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasks.title.trim() !== "") {
      const newTask = [
        ...taskList,
        {
          id: Date.now(),
          title: tasks.title,
          description: tasks.description,
          dueDate: tasks.due,
          completed: false,
        },
      ];

      setTaskList(newTask);
      setTasks({ title: "", description: "", due: "" });
    }
  };

  const handleCheckBox = (taskId) => {
    setTaskList((prevTask) =>
      prevTask.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleClearTasks = () => {
    setTaskList([])
  }

  return (
    <div>
      <h4>ENTER TASK HERE</h4>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h4>Enter Title</h4>
        <input
          name="title"
          type="text"
          value={tasks.title}
          onChange={handleChange}
        />
        <h4>Enter Details</h4>
        <input
          name="description"
          type="text"
          value={tasks.description}
          onChange={handleChange}
        />
        <h4>ENTER DUE DATE</h4>
        <input
          name="due"
          type="date"
          value={tasks.due}
          onChange={handleChange}
        />

        <button>Add Task</button>
      </form>

      <div>
        <hr />
        <div>
          <h3>TASK DETAILS</h3>
          <ul>
            {taskList.map((singleTask) => {
              const { id, title, description, dueDate, completed } = singleTask;
              return (
                <li
                  key={id}
                  style={{
                    textDecoration: completed ? "line-through" : "none",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => handleCheckBox(id)}
                  />
                  <h4>{title}</h4>
                  <h4>{description}</h4>
                  <h4>{dueDate}</h4>
                </li>
              );
            })}
          </ul>

          {taskList.some((task) => task.completed) && <button onClick={handleClearTasks}>Clear Task</button>}
        </div>
      </div>
    </div>
  );
};

export default TaskCompleted;
