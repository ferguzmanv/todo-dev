import { useState } from 'react';
import Hearder from './components/Header.jsx';
import TodoCreate from './components/TodoCreate.jsx';
import TodoList from './components/TodoList.jsx';
import TodoComputed from './components/TodoComputed.jsx';
import TodoFilter from './components/TodoFilter.jsx';

const initialStateTodo = [

  {
    id: 1,
    title: "completado react",
    completed: true,
  },

  { id: 1, title: "Start studying database fundamentals", completed: true },
  { id: 2, title: "studying database fundamentals", completed: false },
  { id: 3, title: "database fundamentals", completed: true },
  { id: 4, title: "fundamentals", completed: false },


];

const App = () => {

  const [todos, setTodos]= useState(initialStateTodo)

  return (

    <div className="bg-[url('assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat bg-slate-200 m-0 min-h-screen ">

      <Hearder />

      <main className="container mx-auto mt-10 px-4">

        <TodoCreate />

        <TodoList todos={todos} />

        <TodoComputed />

        <TodoFilter />

      </main>

      <footer className='mt-8 text-center'>
        <p className=' mt-8 text-center'>Drag and drop reorder</p>
      </footer>

    </div>

  );
};

export default App;