const TodoFilter = () => {
    return (
        <section className="container mx-auto mt-8 px-4">
            <div className='flex justify-center gap-4 rounded-md bg-white p-4 '>
                <button className="hover:text-blue-300">all</button>
                <button className='hover:text-blue-300'>active</button>
                <button className='hover:text-blue-300'>completed</button>
            </div>
        </section>

    )

}

export default TodoFilter;
