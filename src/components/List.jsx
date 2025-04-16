import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, update } from "../feature/todo/todoSlice";

const List = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className=" w-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm  dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        All Todos
      </h5>
      {todos.map((todo) => (
        <div className="my-2 max-w-sm p-6 flex justify-between  bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <input
              onChange={() => dispatch(update(todo.id))}
              checked={todo.isComplete}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <span
              className={`font-normal ${
                todo.isComplete ? "line-through" : ""
              }  text-gray-700 ms-2 dark:text-gray-400`}
            >
              {todo.todo}
            </span>
          </div>
          <div>
            <button
              onClick={() => dispatch(remove(todo.id))}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
