import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import './TicketReady.css';

export default function TicketReady() {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, email, imagePreview, ticketCount } = location.state || {}; // Get user details

    // Redirect to FinalTicket page with user data
    const handleNext = () => {
        navigate('/finalticket', { state: { name, email, imagePreview, ticketCount } });
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
            <div className="form-content3">
                <header>
                    <div>
                        <p className="header-title3">Ready</p>
                        <p className="steps3">Step 3/3</p>
                    </div>
                    <div>
                        <section id="progress-bar3"></section>
                    </div>
                </header>

                <section className="form-body3">
                    <div>
                        <h1>Your Ticket is Booked!</h1>
                        <p>You can download or check your email for a copy</p>
                    </div>

                    <section id="ticket">
                        <div id="first-ticket">
                            <section id="bg">
                                <div id="left-bg"></div>

                                <div id="right-bg">
                                    <section id="top-right">
                                        <span>Techember Fest ’25</span>
                                        <div id="stardiv">
                                            <h3>REG</h3>
                                        </div>
                                    </section>

                                    <section id="bottom-right">
                                        <p>📍 04 Rumens road, Ikoyi, Lagos</p>
                                        <p>📅 March 15, 2025 | 7:00 PM</p>
                                    </section>
                                </div>
                            </section>

                            <section id="permits">
                                <p>Ticket for {ticketCount} {ticketCount > 1 ? "entries" : "entry"} only</p>
                            </section>
                        </div>

                        <div id="second-ticket">
                            {[...Array(60)].map((_, index) => (
                                <span key={index}></span>
                            ))}
                        </div>

                        <div id="third-ticket">
                            <section id="username">
                                <h3>Techember Fest ’25</h3>
                                <p>User Name: <span>{name || "Guest"}</span></p>
                            </section>
                            <div id="stardiv2">
                                <h3>REG</h3>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginTop: '3em' }} id="buttons3">
                        <button id="cancelbtn3" onClick={handleBookAnotherTicket}>
                            Book Another Ticket!
                        </button>
                        <button id="nextbtn3" onClick={handleNext}>Next</button>
                    </section>
                </section>
            </div>
        </>
    );
}
