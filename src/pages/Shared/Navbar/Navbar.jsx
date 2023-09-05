import { useContext } from "react";
import { Link } from "react-router-dom";
import {  useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../ThemeContext/ThemeContext"; 

const Navbar = () => {
    const { theme, toggleTheme, backgroundColor } = useContext(ThemeContext); // Access the theme, toggleTheme function, and backgroundColor from the context
    const location = useLocation();
    const navigate = useNavigate(); 

    const from = location.state?.from?.pathname || '';
    
    const handleLogOut = () =>{
        localStorage.removeItem("auth_token")
        localStorage.removeItem("auth_token_type") 
        navigate(from, { replace: true });
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    const navbarStyles = {
        backgroundColor: backgroundColor,
        color: theme === 'light' ? '#000000' : '#ffffff',
    };
    const menuItems =
        <>
            <li><Link to={'/dashboard/personal-info'}>Dashboard</Link></li>
            <li> {/* Render the theme toggle button */}
                <button onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                </button>
                {/* ... rest of the navbar code */}</li>
            <li><button onClick={handleLogOut}>LogOut</button></li>
            
            
        </>
    return (
        <div style={navbarStyles} className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">DOX td.</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>

            </div>
            <div className="navbar-end lg:hidden">
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;