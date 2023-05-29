const TodoCreate = () => { 
    
    return(

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

      
    );
    
    
    
  };

  export default TodoCreate;