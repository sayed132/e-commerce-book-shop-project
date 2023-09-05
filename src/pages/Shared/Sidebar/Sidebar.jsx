import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../ThemeContext/ThemeContext";

const Sidebar = () => {
  const { backgroundColor, theme } = useContext(ThemeContext); // Access the backgroundColor from the context
  const sidebarStyles = {
    backgroundColor: backgroundColor,
    color: theme === "light" ? "#000000" : "#ffffff",
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul
          style={sidebarStyles}
          className="menu p-4 w-80 h-full bg-base-200 text-base-content"
        >
          
          <li className="mb-1">
            <details open={false}>
              <summary>Invoices</summary>
              <ul style={sidebarStyles} className="px-2 w-full">
                <li className="mb-2 ">
                  <Link to="/dashboard/invoices-list">Invoices List</Link>
                </li>
                <li className="mb-2 ">
                  <Link to="/dashboard/invoices-details">Invoices Details</Link>
                </li>

              </ul>
            </details>
          </li>
          <li className="mb-2 ">
            <Link to="/dashboard/order-list">Orders</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
