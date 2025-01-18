import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(""); 
  const [editingTaskId, setEditingTaskId] = useState(null); 
  const [editingTaskText, setEditingTaskText] = useState(""); 

  
  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      status: "Incomplete", 
    };

    setTasks([...tasks, newTaskObj]); 
    setNewTask(""); 
  };

  
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  
  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === "Complete" ? "Incomplete" : "Complete" }
        : task
    );
    setTasks(updatedTasks);
  };

  
  const startEditing = (taskId, currentText) => {
    setEditingTaskId(taskId);
    setEditingTaskText(currentText);
  };

  
  const saveEditedTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId ? { ...task, title: editingTaskText } : task
    );
    setTasks(updatedTasks);
    setEditingTaskId(null);
    setEditingTaskText("");
  };

  return (
    <div>
      {}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          style={{
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6200ea",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>

      {}
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available. Add some tasks to get started!</p>
        ) : (
          tasks.map((task) => (
            <div className="task-card" key={task.id}>
              {editingTaskId === task.id ? (
                
                <div>
                  <input
                    type="text"
                    value={editingTaskText}
                    onChange={(e) => setEditingTaskText(e.target.value)}
                    style={{
                      padding: "10px",
                      fontSize: "1rem",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      marginBottom: "10px",
                    }}
                  />
                  <button
                    onClick={saveEditedTask}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#4caf50",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : (
                
                <>
                  <h2>{task.title}</h2>
                  <p>Status: {task.status}</p>
                  <button
                    onClick={() => toggleTaskStatus(task.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#6200ea",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                  >
                    Mark as {task.status === "Complete" ? "Incomplete" : "Complete"}
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => startEditing(task.id, task.title)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#ffc107",
                      color: "black",
                      border: "none",
                      borderRadius: "5px",
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;
