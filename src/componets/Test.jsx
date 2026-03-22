// import React, { useState, useEffect } from "react";

// function Test() {
//   const [tasks, setTasks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [priority, setPriority] = useState("Medium");

//   useEffect(() => {
//     const saved = sessionStorage.getItem("tasks");
//     if (saved) {
//       setTasks(JSON.parse(saved));
//     }
//   }, []);

//   useEffect(() => {
//     sessionStorage.setItem("tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const addTask = (e) => {
//     e.preventDefault();
//     if (!title.trim()) return;

//     const newTask = {
//       id: Date.now(),
//       title,
//       priority,
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTitle("");
//     setPriority("Medium");
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const toggleComplete = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const sortByPriority = (a, b) => {
//     const order = { High: 3, Medium: 2, Low: 1 };
//     return order[b.priority] - order[a.priority];
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
//         📝 To-Do List
//       </h2>

//       <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-3 mb-6">
//         <input
//           type="text"
//           placeholder="Enter task..."
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//         />

//         <select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md"
//         >
//           <option>High</option>
//           <option>Medium</option>
//           <option>Low</option>
//         </select>

//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//         >
//           Add
//         </button>
//       </form>

//       <ul className="space-y-3">
//         {tasks.sort(sortByPriority).map((task) => (
//           <li
//             key={task.id}
//             className="flex justify-between items-center p-3 bg-gray-100 rounded-md"
//           >
//             <span
//               onClick={() => toggleComplete(task.id)}
//               className={`cursor-pointer ${
//                 task.completed ? "line-through text-gray-500" : ""
//               }`}
//             >
//               {task.title} -{" "}
//               <span
//                 className={`font-semibold ${
//                   task.priority === "High"
//                     ? "text-red-500"
//                     : task.priority === "Medium"
//                     ? "text-yellow-500"
//                     : "text-green-500"
//                 }`}
//               >
//                 {task.priority}
//               </span>
//             </span>
//             <button
//               onClick={() => deleteTask(task.id)}
//               className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Test;

import React, { useEffect, useState } from "react";

const Test = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setemail] = useState("");
  const [bio, setBio] = useState("");
  const [editId, setEditId] = useState(null);
  const [allTask, setAlltask] = useState([]);
  console.log(allTask, "alltasksin");

  useEffect(() => {
    const allItems = sessionStorage.getItem("items");
    if (allItems) {
      // console.log(allItems, "saved");
      setAlltask(JSON.parse(allItems));
    }
  }, []);
  const addTask = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !bio.trim()) {
      console.log("Please fill all fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      name,
      phone,
      email,
      bio,
    };
    let updatedTasks;
    if (editId) {
      // Editing existing task
      updatedTasks = allTask.map((task) =>
        task.id === editId ? newTask : task
      );
    } else {
      // Adding new task
      updatedTasks = [...allTask, newTask];
    }
    setAlltask(updatedTasks);

    try {
      sessionStorage.setItem("items", JSON.stringify(updatedTasks));
      alert("succesfully stored");
      setName("");
      setPhone("");
      setemail("");
      setBio("");
    } catch (e) {
      alert("error");
    }
  };
  //   useEffect(() => {
  //   sessionStorage.setItem("items", JSON.stringify(allTask));
  // }, [allTask]);

  function handleDelete(id) {
    if (id) {
      const updatedTasks = allTask.filter((task) => task.id !== id);
      setAlltask(updatedTasks);
      sessionStorage.setItem("items", JSON.stringify(updatedTasks));
    }
  }
  function handleEdit(task) {
    setName(task.name);
    setPhone(task.phone);
    setemail(task.email);
    setBio(task.bio);
    setEditId(task.id);
  }

  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center bg-slate-400">
      <form
        className="flex flex-col gap-3 w-fit h-full  justify-center "
        onSubmit={addTask}
      >
        <input
          className="w-full h-[40px] text-clip border-black text-black font-extralight rounded border-[1px]"
          value={name}
          type="text"
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full h-[40px] text-clip border-black text-black font-extralight rounded border-[1px]"
          value={phone}
          type="tel"
          placeholder="enter phone"
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <input
          className="w-full h-[40px] text-clip border-black text-black font-extralight rounded border-[1px]"
          value={email}
          type="email"
          placeholder="enter email"
          onChange={(e) => setemail(e.target.value)}
        />{" "}
        <input
          className="w-full h-[40px] text-clip border-black text-black font-extralight rounded border-[1px]"
          value={bio}
          type="text"
          placeholder="enter bio"
          onChange={(e) => setBio(e.target.value)}
        />
        <button
          className=" h-fit text-xs bg-yellow-200 border-[10px]  border-black w-full text-black"
          type="submit"
        >
          Add Task
        </button>
      </form>

      <div className="w-full h-full flex justify-center">
        <ul>
          {allTask.length > 0 ? (
            allTask.map((item, index) => (
              <li key={index}>
                {item.name} - {item.email}
                {item.phone} - {item.bio}
                <button
                  className="w-5 h-5 text-xs bg-blue-300 "
                  onClick={() => handleDelete(item.id)}
                >
                  {" "}
                  Delete
                </button>
                <button
                  className="w-10 text-xs h-5 bg-blue-300 "
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
              </li>
            ))
          ) : (
            <li>No tasks available</li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Test;
