import React, { useEffect, useState } from "react";

const Test2 = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("HIGH");
  const [allTask, setAlltask] = useState([]);
  const [hasloaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("AllTask");
    if (saved) {
      setAlltask(JSON.parse(saved));
      //   console.log(saved, "saved");
    }
    setHasLoaded(true);
  }, []);
  useEffect(() => {
    if (hasloaded) {
      sessionStorage.setItem("AllTask", JSON.stringify(allTask));
    }
  }, [allTask, hasloaded]);
  const addTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Add Title");
    const newTask = {
      id: Date.now(),
      title,
      priority,
    };
    // alert(newTask);
    console.log(newTask);
    setAlltask((prevTasks) => [...prevTasks, newTask]);

    console.log(newTask, "new");

    setTitle("");
    setPriority("HIGH");
  };
  const Delete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setAlltask(allTask.filter((task) => task.id !== id));
    }
  };
  const sortTasks = (tasks) => {
    const priorityOrder = {
      LOW: 1,
      MEDIUM: 2,
      HIGH: 3,
    };
    return tasks.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  };

  return (
    <>
      <form onSubmit={addTask} className="bg-black">
        <input
          value={title}
          placeholder="Enter Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <select
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
        >
          <option>HIGH</option>
          <option>MEDIUM</option>
          <option>LOW</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <ul>
        {sortTasks(allTask).map((item, index) => (
          <li key={item.id}>
            <strong>{item.title}</strong> -{item.priority}
            <button className="bg-black" onClick={() => Delete(item.id)}>
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Test2;
