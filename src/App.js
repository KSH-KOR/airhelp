import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import AboutPage from './pages/AboutPage';
 import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

 function App() {
     return <Router>
         <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/About" element={<AboutPage />} />
             <Route path='/Booking' element={<BookingPage/>} />
         </Routes>
     </Router>;
};

export default App;
