import Navbar from "./Navbar";
import {Link} from "react-router-dom";

export default function SelectMode() {
return (
    <div>
        <Navbar></Navbar>
        <div className="flex flex-col place-items-center mt-20 ">
            <div className="grid grid-cols-1 gap-2 flex mt-5 justify-between flex-wrap max-w-screen-xl text-center align-middle">                
                <Link to="/host">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg">Continue as Host</button>
                </Link>
                <Link to="/guest">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg">Continue as Guest</button>
                </Link>
            </div>
        </div>            
    </div>
);

}