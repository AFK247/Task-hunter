import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { RouterProvider, useNavigate } from "react-router-dom";
import "./App.css";
import Spinner from "./components/Spinner";
import router from "./routes/Routes";


function App() {
  const spinner=useSelector((state)=>state.loading.value);
  
  
  return (
    <div>
      {
       spinner===true?
        <Spinner></Spinner>
       :
        <>
         <RouterProvider router={router}></RouterProvider>
         <Toaster position="top-center" reverseOrder={false} />
        </>

      }
      
    </div>
  );
}

export default App;
