import './App.css'
import { Con } from './js/context';
import Sales from './Pages/Sales/Sales';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { RouterProvider } from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import { NotificationProvider } from './context/Notification.context';
import Layout from './layout/Layout';
import Signin from './Pages/auth/Signin';
import { LoginForm } from './components/login-form';
import AuthLayout from './layout/AuthLayout';

import { Toaster } from 'react-hot-toast';
import ContractPage from './components/ui/Contractpage';
import Setting from './components/ui/setting';
import Catalog from './components/ui/catalog';
import UserManagementPage from './components/ui/UserManagementPage';
import Reports from './components/ui/reports';
import { useState } from 'react';

function App() {
//   const router = createBrowserRouter([
//       {
//       path: "/",
//       element: <Layout />,   
//       children: [
//         { path: "home", element: <Home /> },       
//         { path: "sales", element: <Sales /> },   
//         { path: "LoginForm", element: <LoginForm /> },   
    
//       ],
//     },
//     { path: "*", element: <NotFound /> },        
//     { path: "/auth", element: <AuthLayout /> ,
//        children: [
//       { index: true, element:  < Signup /> },       
//         { path: "Signup", element: < Signup /> },   
//         { path: "signin", element: <Signin/> },   
// ],
//     },        
//   ]);
  const [data,setData]=useState([]);
     const [file, setFile] = useState(null); 
       const [users,setUsers]=useState([]);
       const [activities, setActivities ]= useState([]);
       const [industry,setIndustry]=useState([]);
       const[packages,setPackage]=useState([]);
       const[features,setFeature]=useState([]);
       const [services,setServices]=useState([]);
        const [invoiceItems, setInvoiceItems] = useState([]);
  const [discount, setDiscount] = useState(0);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/signin" replace />,
  },
  {
    path: "/",
    element: <Layout />,   
    children: [
      { path: "home", element: <Home /> },       
      { path: "sales", element: <Sales /> },   
      { path: "LoginForm", element: <LoginForm /> },   
      
         {path:"contracts",element:<ContractPage/>},
          {path:"setting",element:<Setting/>} ,  
           {path:"users",element:<UserManagementPage/>} ,
           {path:"reports",element:<Reports/>} ,
             {path:"catalog",element:<Catalog/>},
    ],
  },
  { path: "*", element: <NotFound /> },        
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Signin/> },   
      { path: "signin", element: <Signin /> },     
     
 ],
  },        
]);


  return (
     <>
     {/* <NotificationProvider>
 <RouterProvider router={router} /> 
    <Toaster position="top-right" reverseOrder={false} />
 </NotificationProvider>   */}
 
     <Con.Provider value={{data,setData,invoiceItems,setInvoiceItems,discount,setDiscount,services,setServices,file,setFile,users,setUsers,activities,setActivities,industry,setIndustry,packages,setPackage,features,setFeature}}>
       <NotificationProvider>
 <RouterProvider router={router} /> 
    <Toaster position="top-right" reverseOrder={false} />
 </NotificationProvider> 
     </Con.Provider>
   </>
  )
}

export default App
