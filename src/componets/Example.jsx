import React, { useEffect, useState } from "react";
import { TracingBeam } from "../components/ui/tracing-beam";

function Example() {
  const [priority, setPriority] = useState("High");
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [hasloaded, setHasLoaded] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
      //   console.log(saved, "saved");
    }
    setHasLoaded(true);
  }, []);
  //   console.log(tasks, "tasks");

  useEffect(() => {
    if (hasloaded) {
      sessionStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, hasloaded]);
  const addTask = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (selectedTaskId) {
      // 📝 Update existing task
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTaskId ? { ...task, title, priority } : task
      );
      setTasks(updatedTasks);
      setSelectedTaskId(null); // ✅ exit edit mode
    } else {
      // ➕ Add new task
      const newTask = {
        id: Date.now(),
        title,
        priority,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }

    // Clear inputs
    setTitle("");
    setPriority("Medium");
  };

  function DeleteItem(id) {
    // console.log(id, "id");
    setTasks(tasks.filter((task) => task.id !== id));
    // tasks.filter((task)=>console.log(task.id)
    // )
  }

  return (
    // <div className="w-full h-full bg-slate-300 mx-auto">
    //   <form className="bg-slate-400 mx-auto flex " onSubmit={addTask}>
    //     <input
    //       value={title}
    //       placeholder="enter title"
    //       onChange={(e) => {
    //         setTitle(e.target.value);
    //       }}
    //     ></input>
    //     <select
    //       value={priority}
    //       onChange={(e) => setPriority(e.target.value)}
    //       className="px-4 py-2 border rounded-md"
    //     >
    //       <option>High</option>
    //       <option>Medium</option>
    //       <option>Low</option>
    //     </select>

    //     <button className="p-4 bg-red-400" type="submit">
    //       {selectedTaskId ? "Save" : "Add"}
    //     </button>
    //   </form>

    //   <div className="bg-yellow-300 mx-auto p-4">
    //     <ul className="space-y-3">
    //       {tasks.map((item, index) => (
    //         <li
    //           key={item.id}
    //           className={`flex justify-between items-center p-3 rounded-md ${
    //             selectedTaskId === item.id ? "bg-blue-100" : "bg-gray-100"
    //           }`}
    //         >
    //           <span
    //             onClick={() => {
    //               setSelectedTaskId(item.id);
    //               setTitle(item.title);
    //               setPriority(item.priority);
    //             }}
    //             className="cursor-pointer"
    //           >
    //             {item.title}{" "}
    //             <span className="font-semibold text-sm">({item.priority})</span>
    //           </span>

    //           <div className="flex gap-2">
    //             <button
    //               className="text-sm px-2 py-1 bg-green-200 rounded"
    //               onClick={() => {
    //                 setSelectedTaskId(item.id);
    //                 setTitle(item.title);
    //                 setPriority(item.priority);
    //               }}
    //             >
    //               Edit
    //             </button>

    //             <button
    //               className="text-sm px-2 py-1 bg-red-200 rounded"
    //               onClick={() => DeleteItem(item.id)}
    //             >
    //               Delete
    //             </button>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div className="min-h-[200vh] bg-white py-20">
    <TracingBeam>
      <div className="space-y-32">
        <section className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-bold">Section 1</h2>
          <p>This is the content of section 1.</p>
        </section>
        <section className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-bold">Section 2</h2>
          <p>This is the content of section 2.</p>
        </section>
        <section className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-bold">Section 3</h2>
          <p>This is the content of section 3.</p>
        </section>
        <section className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-bold">Section 4</h2>
          <p>This is the content of section 4.</p>
        </section>
        <section className="p-6 border rounded-lg shadow-sm bg-gray-50">
          <h2 className="text-2xl font-bold">Section 5</h2>
          <p>This is the content of section 5.</p>
        </section>
      </div>
    </TracingBeam>
  </div>
  
  );
}
export default Example;
