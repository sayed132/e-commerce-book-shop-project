import  { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Sidebar from '../pages/Shared/Sidebar/Sidebar';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const DashboardLayouts = () => {
  const { backgroundColor } = useContext(ThemeContext); // Access the backgroundColor from the context

  // Define the styles based on the background color
  const layoutStyles = {
    backgroundColor: backgroundColor,
  };

  return (
    <div style={layoutStyles}> {/* Apply the styles to the div element */}
      <Navbar />
      <div className='lg:grid grid-cols-4'>
        <Sidebar />
        <div className='col-span-3'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
