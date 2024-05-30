import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
}

const Header: React.FC<Props> = (props) => {


    return (
        <div className='bg-black text-white py-5'>
            <header className='container-x flex justify-between text-lg items-center'>
                <div>
                    <Link to="/" className='text-2xl'>Welcome To Posts</Link>
                </div>
                <div className='p-3 bg-orange-600 text-white font-bold rounded-md'>
                    <Link to="/addpost">Add Post</Link>
                </div>
            </header>
        </div>
    )
}

export default Header