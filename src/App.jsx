
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import "./App.css";

import Login from "./Components/Login/Login";
import DashboardLayouts from "./Layouts/DashboardLayouts";
import SignUp from "./Components/SignUp/SignUp";
import InvoicesDetails from "./pages/Dashboard/Invoices/InvoicesDetails";
import InvoicesList from "./pages/Dashboard/Invoices/InvoicesList";
import OrdersList from "./pages/Dashboard/Orders/OrdersLIst/OrdersList";

export default function App() {
  

  return (
    <div className="max-w-screen mx-auto">
      <Router>
        <Routes>
          
          
            <Route path="/dashboard/*" element={<DashboardLayouts />}>
              <Route index />
              <Route path="invoices-details" element={<InvoicesDetails />} />
              <Route path="invoices-list" element={<InvoicesList />} />
              <Route path="order-list" element={<OrdersList />} />
              
              

              
            </Route>
            <Route path="*" element={<Login />} />
            <Route path="/sign_up" element={<SignUp />} />
          
          
        </Routes>
      </Router>
    </div>
  );
}
