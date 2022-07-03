import {
  Route,
  Routes,
  BrowserRouter,
  Router,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RegisterForm from "./registerAndLoginForms/reusableRegister/RegisterForm";
import Products from "./productsView/Products";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./productView/ProductDetails";
import LoginForm from "./registerAndLoginForms/reusableRegister/LoginForm";
import Profile from "./profileView/Profile";
import LogOut from "./components/LogOut";
import ReviewOrder from "./orderView/ReviewOrder";
import SubmitOrder from "./orderView/SubmitOrder";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();
  // const notify = () => toast("Wow so easy!");

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ToastContainer position="bottom-right" />
          <Navbar />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/revieworder" element={<ReviewOrder />} />
            <Route path="/order" element={<SubmitOrder />} />

            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<Navigate to="/products" replace />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
