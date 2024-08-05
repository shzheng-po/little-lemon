import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import AboutLittleLemon from './components/AboutLittleLemon';
import MenuPage from './components/MenuPage';
import OrderPage from './components/OrderPage';
import Login from './components/LoginPage';
// import { useReducer } from "react";

// const [availableTime, setAvailableTime] = useState([
//   '17:00',
//   '18:00',
//   '19:00',
//   '20:00',
//   '21:00',
//   '22:00',
// ])

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutLittleLemon />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path="/reservation" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
