import MoonIcon from "./MoonIcon";
const Hearder = () => {
    return (

        <header className="contain mx-auto px-4">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-bold tracking-[0.1em] m-6" >To do's </h1>
                <button>
                    <MoonIcon fill="#fff" />
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

    );


};

export default Hearder;