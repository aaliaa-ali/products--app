import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Navbar from "./Navbar";
import RegisterForm from "./registerAndLoginForms/reusableRegister/RegisterForm";
import Products from "./productsView/Products";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./productView/ProductDetails";
import LoginForm from "./registerAndLoginForms/reusableRegister/LoginForm";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/product/:id" element={<ProductDetails />} />

          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
