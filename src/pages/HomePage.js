import { useState } from "react";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    };

    const toggleTaskStatus = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTaskForm addTask={addTask} />
            <TaskList 
                tasks={tasks} 
                toggleTaskStatus={toggleTaskStatus} 
                deleteTask={deleteTask} 
            />
        </div>
    );
};

export default HomePage;
