import React from 'react';
import './App.css';
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Example from './Example';
import Register from './register';
// import ClassComponent from "./Component/ClassComponent/ClassRoute.jsx";

// const ClassComponent = React.lazy(() => import('./ComponAmponent/FunctionalComponent/FunctionalRoute'))
const FunctionComponent = React.lazy(() => import('./functioncomponent/Functionroute'))
const MainRoutes = createBrowserRouter([
    {

        path: "/",
        element: <Home />,
    },
    {
        path: "/About",
        element: <About />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },
    {
        path: "/Register",
        element: <Register />,
    },

    {
        path: "/example",
        element: <Example />,
        children: [

            {
                path: "functioncomponent/*",
                element: <FunctionComponent />,
            },
        ],
    },
   

]);
export default MainRoutes;