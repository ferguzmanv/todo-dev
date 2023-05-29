import React from 'react';
import CrossIcon from "./components/crossIcon.jsx";
import MoonIcon from './components/MoonIcon.jsx';

const App = () => {
  return (

    <div className="bg-[url('assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-center bg-no-repeat bg-slate-200 ">
      <header className="contain mx-auto px-4">

        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.1em] m-6" >To do's </h1>
          <button>
            <MoonIcon fill="#676" />
          </button>
        </div>


        <form className="flex items-center overflow-hidde rounded-md bg-white py-2 gap-4">
          <span className="inline-block h-5 w-5 rounded-full border-2 mx-3 "></span>
          <input
            type="text"
            placeholder="Create a new todo"
            className="w-full border-none text-gray-400 outline-none" />
        </form>
      </header>

      <main className="container mx-auto mt-10 px-4">
        <div className="rounded-md bg-white px-4">


          <article className='flex gap-4 py-4 b-2 border-b-gray-400 border-b-[1.5px]'>
            <button className="inline-block h-5 w-5 rounded-full border-2 mx-3"></button>
            <p className="grow text-gray-500">Estudiar AWS</p>
            <button className='flex-none'>
              <CrossIcon />
            </button>
          </article>
              
          <article className='flex gap-4 py-4 b-2 border-b-gray-400 border-b-[1.5px]'>
            <button className="inline-block h-5 w-5 rounded-full border-2 mx-3"></button>
            <p className="grow text-gray-500">Estudiar AWS</p>
            <button className='flex-none'>
              <CrossIcon />
            </button>
          </article>

          <article className='flex gap-4 py-4 b-2 border-b-gray-400 border-b-[1.5px]'>
            <button className="inline-block h-5 w-5 rounded-full border-2 mx-3"></button>
            <p className="grow text-gray-500">Estudiar AWS</p>
            <button className='flex-none'>
              <CrossIcon />
            </button>
          </article>


          <section className='flex justify-between py-4 px-4  '>
            <span className='text-gray-400'>3 items left</span>
            <button className='text-gray-400'>Clear completed</button>
          </section>
        </div>


      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className='flex justify-center gap-4 rounded-md bg-white p-4 '>
        <button className="hover:text-blue-300">all</button>
        <button className='hover:text-blue-300'>active</button>
        <button className='hover:text-blue-300'>completed</button>
        </div>
      </section>

    </div>

  );
};

export default App;