import CrossIcon from "./crossIcon";
const TodoList = () => {
    
    return (
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
        </div>
    )

};

export default TodoList;