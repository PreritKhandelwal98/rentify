import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import PropertyList from "./pages/PropertyList";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-listing" element={<CreateListing />} />

          <Route path="/properties/" element={<ListingDetails />} />
          <Route path="/properties/category/:category" element={<CategoryPage />} />
          <Route path="/properties/search/:search" element={<SearchPage />} />

          <Route path="/:userId/properties" element={<PropertyList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
