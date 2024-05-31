import { Link } from 'react-router-dom';
const Homepage = () => {

    return (
        <div className="h-[30vh] !my-auto">
            <div className='container-x flex flex-col gap-8 justify-center'>
                <div className='flex justify-center items-center text-9xl '>
                    <span className='uppercase font-bold'>Map Game</span>
                </div>
                <div className='flex justify-center items-center'>
                   <Link to={"/map-game"}>
                    <button className='inline-block outline-none cursor-pointer text-6xl leading-none rounded-full transition-colors duration-300 border border-gray-800 tracking-wider min-w-[450px] uppercase whitespace-normal font-semibold text-center py-4 px-3.5 text-gray-700 bg-transparent h-40 hover:text-white hover:bg-gray-400 hover:border-transparent'>
                        <span>Start</span>
                    </button>
                    </Link>
                </div>
           </div>
        </div>
    );
};

export default Homepage;
