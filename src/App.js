import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Spinner from "./components/Spinner";
import router from "./routes/Routes";




function App() {
  
  
  return (
    <div>
      <Spinner/>
      
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
      
    </div>
  );
}

export default App;
