import { useState } from "react";

const TodoCreate = ({ createTodo }) => {

  const [title, setTitle] = useState('')
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    console.log(title);

    if (!title.trim()) {
      return setTitle("");

    }
    createTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmitAddTodo}
      className="flex items-center overflow-hidde rounded-md bg-white py-2 gap-4 mb-8">
      <span className="inline-block h-5 w-5 rounded-full border-2 mx-3 "></span>
      <input
        type="text"
        placeholder="Create a new todo"
        className="w-full border-none text-gray-400 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;