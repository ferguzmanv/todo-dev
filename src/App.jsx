import React from 'react';
import CrossIcon from './components/crossIcon.jsx';
import Hearder from './components/Header.jsx';

const App = () => {
  return (

    <div className="bg-[url('assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat bg-slate-200 m-0 min-h-screen ">
      <Hearder />

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