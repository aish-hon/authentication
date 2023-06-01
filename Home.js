//import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmpListing from './EmpListing';

const Home = () => {
    const usenavigate=useNavigate();

    
    return (
        <div>
            <div className="header">
                <Link to={'/'}></Link>
                <Link to={'/login'}>Logout</Link>
            </div>
            <h1 className="text-center">welcome to home page</h1>
            <EmpListing/>
        </div>
    )
}
 
export default Home;