import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/molecules/header/Header";
import Footer from "./components/molecules/footer/Footer";
import SuccessForm from "./components/pages/SuccessForm";
import Homepage from "./components/pages/Homepage";
import PageNotFound from "./components/pages/PageNotFound";
import ApplicationForm from "./components/pages/ApplicationForm";
import { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="form" element={<ApplicationForm formData={formData} handleChange={handleChange} />} />
          <Route path="success" element={<SuccessForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
