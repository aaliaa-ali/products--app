import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import Navbar from "./Navbar";
import RegisterForm from "./registerAndLoginForms/reusableRegister/RegisterForm";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
