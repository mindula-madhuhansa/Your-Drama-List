import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage.jsx";
import DramasPage from "./pages/DramasPage.jsx";
import DramasFormPage from "./pages/DramasFormPage.jsx";
import DramaPage from "./pages/DramaPage";
import ListingsPage from "./pages/ListingsPage";
import ListingPage from "./pages/ListingPage";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/dramas" element={<DramasPage />} />
          <Route path="/account/dramas/new" element={<DramasFormPage />} />
          <Route path="/account/dramas/:id" element={<DramasFormPage />} />
          <Route path="/drama/:id" element={<DramaPage />} />
          <Route path="/account/listings" element={<ListingsPage />} />
          <Route path="/account/listings/:id" element={<ListingPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
