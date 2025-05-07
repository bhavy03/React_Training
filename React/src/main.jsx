import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
// import store from './Redux/store.jsx'
import { store } from "./Redux-Toolkit/app/store.jsx";
import { Provider } from "react-redux";

// we can also do this way
// import { RouterProvider } from "react-router-dom";
// import { createBrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        {/* <RouterProvider router={router}> */}
        <App />
        {/* </RouterProvider> */}
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// A React component is a JavaScript function that you can sprinkle with markup
// Why do multiple JSX tags need to be wrapped?
// Provide key while rendering lists or converting array to li's
// On responding to events always provide the reference to the function
// don't call the value
// Pure component is somewhat that returns the same value even called hundred times
// Pure functions don’t mutate variables outside of the function’s scope
// or objects that were created before the call—that makes them impure!
