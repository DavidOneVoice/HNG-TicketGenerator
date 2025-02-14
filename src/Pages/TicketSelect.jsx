import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TicketSelect.css';
import Header from '../Components/Header';

export default function TicketSelect() {
    const [ticketCount, setTicketCount] = useState(1);

    const increaseTickets = () => setTicketCount(ticketCount + 1);
    const decreaseTickets = () => ticketCount > 1 && setTicketCount(ticketCount - 1);

    return (
        <>
            <Header />
            <section className="form-content">
                <header>
                    <div>
                        <p className="header-title">Ticket Selection</p>
                        <p className="steps">Step 1/3</p>
                    </div>
                </header>

                <div className="form-body">
                    <section id="section">
                        <main>
                            <h2>Techember Fest ’25</h2>
                            <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
                        </main>
                        <div id="event-details">
                            <span>📍 [Event Location]</span>
                            <span>| |</span>
                            <span>March 15, 2025 | 7:00 PM</span>
                        </div>
                    </section>

                    <article>
                        <p id="select-ticket">Select Ticket Type:</p>
                        <div id="access">
                            <section>
                                <span>
                                    <div id="regular-access">
                                        <p>REGULAR ACCESS</p>
                                        <p>20 left!</p>
                                    </div>
                                    <div className="free">
                                        <p>Free</p>
                                    </div>
                                </span>

                                <span className="vip-access">
                                    <div>
                                        <p>VIP Access</p>
                                        <p>20 left!</p>
                                    </div>
                                    <div>
                                        <p>${50 * ticketCount}</p>
                                    </div>
                                </span>

                                <span className="vip-access">
                                    <div>
                                        <p>VVIP Access</p>
                                        <p>20 left!</p>
                                    </div>
                                    <div>
                                        <p>${150 * ticketCount}</p>
                                    </div>
                                </span>
                            </section>
                        </div>
                    </article>

                    <form id="ticketnum">
                        <p id="num-tickets"> Number of Tickets</p>
                        <span>
                            <p id="ticket-bought">{ticketCount}</p>
                            <div id="selection">
                                <span onClick={decreaseTickets}>-</span>
                                <span onClick={increaseTickets}>+</span>
                            </div>
                        </span>
                    </form>

                    <section id="buttons">
                        <Link to="/">
                            <button id="cancelbtn">Cancel</button>
                        </Link>

                        <Link to="/attendeedetails" state={{ ticketCount }}>
                            <button id="nextbtn">Next</button>
                        </Link>
                    </section>
                </div>
            </section>
        </>
    );
}
