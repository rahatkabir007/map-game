import "./NotFound.css";
import { NavLink } from 'react-router-dom';
import notfound from "./images/error-banner.png";

const NotFound = () => {
    return (
        <div className="error-container m-5">
            <div className="flex flex-wrap">
                <div className="main2">
                    <div className="banner">
                        <img src={notfound} alt="" />
                    </div>
                    <div className="text-center p-2 mb-2">
                        <h1 className="text-lg">The requested url was not found !...</h1>
                        <p className="text-lg">Sorry!Evidently the document you were looking for has either been moved or no longer exists!</p>

                    </div>
                </div>

            </div>
            <div className="text-center p-4">
                <NavLink to="/" className="border border-[#000] bg-slate-200 p-3">Redirect To Home Page</NavLink>
            </div>
        </div>
    );
};

export default NotFound;