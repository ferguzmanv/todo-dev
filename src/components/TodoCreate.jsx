const TodoCreate = () => {

  return (
    <form className="flex items-center overflow-hidde rounded-md bg-white py-2 gap-4 mb-8">
      <span className="inline-block h-5 w-5 rounded-full border-2 mx-3 "></span>
      <input
        type="text"
        placeholder="Create a new todo"
        className="w-full border-none text-gray-400 outline-none" />
    </form>
  );
};

  export default TodoCreate;