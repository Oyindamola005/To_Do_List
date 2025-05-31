import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: 60, maxWidth: 600, margin: "auto", display: "flex", flexDirection: "column", gap: 24 , backgroundColor: "#DFEBF7" , borderRadius: 12 , justifySelf: "center", alignSelf: "center"}}>
      <h1 style={{fontWeight: 600, fontSize: 24 , color: "022B55" , textAlign: "center" , fontStyle:"italic"}}>Task Tracker</h1>

      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        <input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  placeholder ="Enter a task"
  style={{ flex: 1, border: '0.2px solid #022B55', padding: '12px', borderRadius: '12px', fontSize:'14px' }}
/>
        <button  style={{backgroundColor: isHovered?"#ffffff" : "#054A8F", color: isHovered? "#022B55" :"white" , padding: 12 , fontSize: 14, fontWeight: isHovered? 600: 300 , borderRadius: 8 , minWidth: 120 , border:isHovered?  '2px solid #022B55' :"#DFEBF7"  }} onClick={addTask} onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}>Add</button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span style={{ flex: 1, textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
