import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../feature/todo/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const addTodo = () => {
    dispatch(add({ id: Date.now(), todo: text, isComplete: false }));
    setText('')
  };
  return (
    <div class=" mb-3 w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Todos
      </h5>
      <div className="flex">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Todo ..."
          required
        />
        <button
          onClick={addTodo}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
