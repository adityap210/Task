import { useState } from "react";
import PropTypes from "prop-types";

const AddTaskForm = ({ addTask }) => {
   const [taskText, setTaskText] = useState("");

   const handleSubmit = (e) => {
       e.preventDefault();
       if (!taskText.trim()) return;
       addTask({ text: taskText, createdAt: new Date() });
       setTaskText("");
   };

   return (
       <form onSubmit={handleSubmit}>
           <input 
               type="text" 
               value={taskText} 
               onChange={(e) => setTaskText(e.target.value)} 
               placeholder="Enter a new task" 
           />
           <button type="submit">Add Task</button>
       </form>
   );
};

AddTaskForm.propTypes = {
   addTask: PropTypes.func.isRequired,
};

export default AddTaskForm;
