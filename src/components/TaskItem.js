import PropTypes from "prop-types";

const TaskItem = ({ task, toggleTaskStatus, deleteTask }) => {
   return (
       <div style={{ display: "flex", justifyContent: "space-between" }}>
           <span
               style={{
                   textDecoration: task.completed ? "line-through" : "none",
                   cursor: "pointer",
               }}
               onClick={() => toggleTaskStatus(task.id)}
           >
               {task.text}
           </span>
           <button onClick={() => deleteTask(task.id)}>Delete</button>
       </div>
   );
};

TaskItem.propTypes = {
   task: PropTypes.object.isRequired,
   toggleTaskStatus: PropTypes.func.isRequired,
   deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;
