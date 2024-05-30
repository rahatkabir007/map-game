import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ToastContainer } from "react-toastify";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <>
   {/* <React.StrictMode> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <App />
  {/* </React.StrictMode> */}
  </>
);

