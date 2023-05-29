import React from 'react';
import Hearder from './components/Header.jsx';
import TodoCreate from './components/TodoCreate.jsx';
import TodoList from './components/TodoList.jsx';
import TodoComputed from './components/TodoComputed.jsx';
import TodoFilter from './components/TodoFilter.jsx';

const App = () => {
  return (

    <div className="bg-[url('assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat bg-slate-200 m-0 min-h-screen ">

      <Hearder />

      <main className="container mx-auto mt-10 px-4">

        <TodoCreate />

        <TodoList />

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