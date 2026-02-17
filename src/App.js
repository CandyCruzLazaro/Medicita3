import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BookingTabs from "./components/BookingTabs/BookingTabs";
import SearchBox from "./components/SearchBox/SearchBox";
import ResultsList from "./components/Results/ResultsList";
import StepsBar from "./components/StepsBar/StepsBar";

import Search from "./components/Pages/Search/Search";
import Login from "./components/Login/Login";
import SelectDate from "./components/Pages/SelectDate/SelectDate";
import Capture from "./components/Pages/Capture/Capture";
import Checkout from "./components/Pages/Checkout/Checkout";
import Payment from "./components/Pages/Payment/Payment";




function Home() {
  return (
    <>
      <div className="hero-section">
        <Navbar />
        <StepsBar currentStep={1} />

        <BookingTabs onChange={(value) => console.log("TAB:", value)} />

        <SearchBox />
      </div>

      <main className="main-content">
        <ResultsList />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* SEARCH */}
        <Route path="/search" element={<Search />} />

        {/* SELECT DATE */}
        <Route path="/selectdate" element={<SelectDate />} />

        {/* Captura de datos*/}
        <Route path="/capture" element={<Capture />} />

        {/* Checkout*/}
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/payment" element={<Payment />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
