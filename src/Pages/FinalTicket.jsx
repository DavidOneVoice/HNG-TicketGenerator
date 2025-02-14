import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import Header from '../Components/Header';
import './FinalTicket.css';

export default function FinalTicket() {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, email, imagePreview } = location.state || {};

    if (!name || !email || !imagePreview) {
        return <p>Error: Missing ticket details.</p>;
    }

    // Function to download the ticket as an image
    const handleDownload = () => {
        const ticket = document.getElementById('ticket-details');
        if (ticket) {
            html2canvas(ticket, { backgroundColor: 'white' }).then((canvas) => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'conference_ticket.png';
                link.click();
            });
        }
    };

    // Function to print the ticket
    const handlePrint = () => {
        window.print();
    };

    // Reset form when booking another ticket
    const handleBookAnotherTicket = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('imagePreview');

        navigate('/ticketselect', { replace: true });
    };

    return (
        <>
            <Header />

            <div className="final-ticket-div">
            <div id="ticket-details" className="ticket">
                <h2>Conference Ticket</h2>
                <img src={imagePreview} alt="Avatar" className="avatar" />
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>

            <div className="button-group">
                <button style={{marginBottom: '1em', marginTop: '1em'}} id="cancelbtn3" onClick={handleBookAnotherTicket}>
                    Book Another Ticket!
                </button>
                <button id="nextbtn3" onClick={handleDownload} className="download-btn">Download Ticket</button>
                <button style={{marginTop: '1em'}} id="cancelbtn3" onClick={handlePrint} className="print-btn">Print Ticket</button>
            </div>
        </div>
        </>
    );
}
