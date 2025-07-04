import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./Pages/Header-Footer/Header";
import Footer from "./Pages/Header-Footer/Footer";
import Navigation from "./Pages/Components/Navigation-bar/Navigation";
// import OrdersHistory from "./Pages/Order's-history/Orders-history";\
// import SelectedProduct from "./Pages/Selected-product/Selected-product";
// import SubmitReview from "./Pages/Selected-product/Submit-review";
import Home from "./Pages/Home/Home";
// import DesignerSignUp from './Pages/Signup/DesignerSignUp';
// import UserSignUp from './Pages/Signup/UserSignUp';
import SignUpProcess from "./Pages/Signup/SignUpProcess";
import AccountInfo from './Pages/Account-info/AccountInfo';
import UserProfile from './Pages/Userprofile/UserProfile';

import LoginPage from './Pages/Login/LoginPage';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpProcess />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/accountinfo" element={<AccountInfo />} />
        <Route path='/userprofile' element={<UserProfile />} />
        
      </Routes>
  )
}

export default App;
