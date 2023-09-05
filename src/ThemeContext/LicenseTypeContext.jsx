import { createContext, useState } from 'react';
import { mask } from '../pages/Dashboard/Utils/utils';

// Create a new context
export const  LicenseTypeContext = createContext();

// Create a provider component
export const LicenseTypeProvider = ({ children }) => { 
  const inputClass = "input bg-white dark:bg-gray-700 input-bordered dark:border-white text-black dark:text-white shadow-sm";
  const selectClass = "select bg-white dark:bg-gray-700 input-bordered dark:border-white text-black dark:text-white shadow-sm";
  const [licenseType, setLicenseType] = useState("cha(lpg)");
  const Mask = mask.filter((e) => e.lType === licenseType)[0].mask;

  const auth_token = localStorage.getItem("auth_token");
  const auth_token_type = localStorage.getItem("auth_token_type");
  const token = auth_token_type + " " + auth_token;


  // Pass the theme, toggle function, and background color to the context provider
  return (
    <LicenseTypeContext.Provider value={{ licenseType, setLicenseType, Mask, token, inputClass, selectClass}}>
      {children}
    </LicenseTypeContext.Provider>
  );
};
