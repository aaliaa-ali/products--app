// import Todo from "./components/Todo";
import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as accountActions from "./redux/actionCreator/accpuntActions";
import * as CakeActions from "./redux/actionCreator/CakeAction";

import Home from "./codeSpliting/Home";
import DashBoard from "./codeSpliting/DashBoard";
import reduxStore from "./redux/store";

import React, { Suspense } from "react";
import RegisterForm from "./product-app/registerAndLoginForms/reusableRegister/RegisterForm";
import Navbar from "./product-app/Navbar";

import FormikContainer from "./formikExample/FormikContainer";
import Profile from "./codeSpliting/Profile";
import Loading from "./Loading";
import NavBar from "./project/NavBar";
import { addCake } from "./redux/actionCreator/CakeAction";
import { addMony } from "./redux/actionCreator/accpuntActions";

// import {deletePost} from './redux/actionCreator/CakeAction'
import { mapDispatchToProps } from "./redux/actionCreator/CakeAction";
import { store, buyCake } from "./redux/Test";
import AllMeetup from "./pages/AllMeetups";
import FormikNew from "./forms/FormikNew";
import Products from "./product-app/productsView/Products";
import { QueryClient, QueryClientProvider } from "react-query";

const lazyProfile = React.lazy(() => {
  return import("./codeSpliting/Profile");
});
const LazyDashboard = React.lazy(() => {
  return import("./codeSpliting/DashBoard");
});
const Register = React.lazy(() => {
  return import("./reusableRegister/RegisterForm");
});

function App() {
  const queryClient = new QueryClient();


  let state = useSelector((state) => state.account);
  let stateCake = useSelector((state) => state.cake);
  let usersState = useSelector((state) => state.users);

  let dispatch = useDispatch();
  // let { addMony  = bindActionCreators(accountActions, dispatch);
  // let { addCake } = bindActionCreators(CakeActions, dispatch);
  let buyCake2 = bindActionCreators(buyCake, store.dispatch);

  const mapDispatchToProps = () => {
    return {
      deletePost: (value) => dispatch({ type: "add", value: value }),
      addPost: (post) => dispatch({ type: "ADD_POST", post: post }),
    };
  };
  console.log("state", state, stateCake, usersState);
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      {/* <button onClick={() => reduxStore.dispatch({ type: "add", value: 100 })}>
        add
      </button> */}
      {/* <button onClick={() => decMony(100)}>add</button> */}
      {/* <button onClick={() => dispatch(addCake(1))}>add Cake</button>
      <button onClick={() => dispatch(addMony(1))}>add Mony</button> */}

      {/* <button onClick={mapDispatchToProps.deletePost.dispatch({value:1})}>add</button> */}
      {/* <button onClick={() => buyCake2()}>add</button> */}
    </div>

    // <div>

    // <button onClick={() => decMony(100)}>add</button>

    //   <RegisterForm />
    // </div>
  );
}

export default App;
