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

        </header>

    );


};

export default Hearder;