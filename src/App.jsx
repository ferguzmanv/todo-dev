import React from 'react';
import xIcon from "./components/xIcon";

const App = () => {
  return (

    <div className="bg-[url('assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-center bg-no-repeat bg-slate-200 ">
      <header className="contain mx-auto px-4">

        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[0.1em] m-6" >To do's </h1>
          <button>luna</button>
        </div>


        <form className="flex items-center overflow-hidde rounded-md bg-white py-2 m- gap-4">
          <span className="inline-block h-5 w-5 rounded-full border-2 mx-3 "></span>
          <input
            type="text"
            placeholder="Create a new todo"
            className="w-full border-none text-gray-400 outline-none" />
        </form>
      </header>

      <main className="container mx-auto mt-10 px-4">
        <div className="rounded-md bg-white px-4">
          <article>
            <button className="inline-block h-5 w-5 rounded-full border-2 mx-3"></button>
            <p className="text-gray-500">Estudiar AWS</p>
            <button>
            <xIcon />
            </button>

          </article>
          <article>
            <button>circle</button>
            <p>Estudiar 2</p>
            <button>EXISDE</button>
          </article>
          <article>
            <button>circle</button>
            <p>Estudiar 3</p>
            <button>EXISDE</button>
          </article>
          <section>
            <span>3 items left</span>
            <button>Clear completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto px-4">
        <button>all</button>
        <button>active</button>
        <button>completed</button>
      </section>

    </div>
  );
};

export default App;