import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/Routes";
import useAuthCheck from "./hooks/useAuthCheck";
import { Toaster } from "react-hot-toast";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div>Checking authentication....</div>
  ) : (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
