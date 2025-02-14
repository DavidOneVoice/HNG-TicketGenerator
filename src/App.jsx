import Home from './Pages/Home';
import TicketSelect from './Pages/TicketSelect';
import TicketReady from './Pages/TicketReady';
import AttendeeDetails from './Pages/AttendeeDetails';
import FinalTicket from './Pages/FinalTicket';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticketselect" element={<TicketSelect />} />
        <Route path="/ticketready" element={<TicketReady />} />
        <Route path="/attendeedetails" element={<AttendeeDetails />} />
        <Route path='/finalticket' element={<FinalTicket />} />
      </Routes>
    </Router>
  );
}

export default App;
