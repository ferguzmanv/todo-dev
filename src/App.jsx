const App = () => {


  return (

    <div className="bg-[url('assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-center bg-no-repeat">
      <header className="contain mx-auto px-4">
        
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-bold">To do's </h1>
          <button>luna</button>
          </div>


        <form className="overflow-hidde rounded-md bg-white py-4 gap-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input type="text" placeholder="Create a new todo" />
        </form>
      </header>
      
      <main className="container mx-auto px-4">
        <article>
          <button>circle</button>
          <p>Estudiar AWS</p>
          <button>EXISDE</button>
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