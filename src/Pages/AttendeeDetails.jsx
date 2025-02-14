import './AttendeeDetails.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../Components/Header';

export default function AttendeeDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const { ticketCount } = location.state || { ticketCount: 1 };

    // Load stored values from localStorage
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(localStorage.getItem('imagePreview') || null);

    useEffect(() => {
        localStorage.setItem('name', name);
    }, [name]);

    useEffect(() => {
        localStorage.setItem('email', email);
    }, [email]);

    useEffect(() => {
        if (imagePreview) {
            localStorage.setItem('imagePreview', imagePreview);
        }
    }, [imagePreview]);

    useEffect(() => {
        if (!localStorage.getItem('imagePreview')) {
            setImagePreview(null);
        }
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const previewURL = URL.createObjectURL(file);
            setImagePreview(previewURL);
            localStorage.setItem('imagePreview', previewURL);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name.trim() || !email.trim() || !imagePreview) {
            alert('All fields including profile photo are required!');
            return;
        }
        navigate('/ticketready', { state: { name, email, imagePreview, ticketCount } });
    };

    return (
        <>
            <Header />
            <section className="form-content2">
                <header>
                    <div>
                        <p className="header-title2">Ticket Selection</p>
                        <p className="steps2">Step 2/3</p>
                    </div>
                    <div>
                        <section id='progress-bar2'></section>
                    </div>
                </header>

                <form className="form-body2" onSubmit={handleSubmit}>
                    <section id='image-upload'>
                        <p>Upload Profile Photo</p>
                        <div id='image-frame'>
                            <input type="file" accept="image/*" onChange={handleImageUpload} hidden id="fileInput" />
                            <label htmlFor="fileInput" className="image-upload-label">
                                {imagePreview ? (
                                    <img src={imagePreview} id="uploaded-image" alt="Uploaded Preview" />
                                ) : (
                                    <article className="upload-container">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <path d="M25.2639 14.816C24.6812 10.2266 20.7505 6.66663 16.0052 6.66663C12.3305 6.66663 9.13854 8.81463 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6666C2.67188 22.3426 5.66254 25.3333 9.33854 25.3333H10.6719V22.6666H9.33854C7.13321 22.6666 5.33854 20.872 5.33854 18.6666C5.33854 16.7946 6.93721 14.9906 8.90254 14.6453L9.67721 14.5093L9.93321 13.7653C10.8705 11.0306 13.1972 9.33329 16.0052 9.33329C19.6812 9.33329 22.6719 12.324 22.6719 16V17.3333H24.0052C25.4759 17.3333 26.6719 18.5293 26.6719 20C26.6719 21.4706 25.4759 22.6666 24.0052 22.6666H21.3385V25.3333H24.0052C26.9465 25.3333 29.3385 22.9413 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7046C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z" fill="#FAFAFA"/>
                                            <path d="M17.3385 18.6666V13.3333H14.6719V18.6666H10.6719L16.0052 25.3333L21.3385 18.6666H17.3385Z" fill="#FAFAFA"/>
                                        </svg>
                                        <p>Drag & drop or click to upload</p>
                                    </article>
                                )}
                            </label>
                        </div>
                    </section>

                    <span id='demarcation'></span>

                    <div id='name-input'>
                        <label htmlFor="name">Enter your name:</label>
                        <input 
                            type="text" 
                            placeholder='Full Name' 
                            id="name" 
                            name="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>

                    <div id='email-input'>
                        <label htmlFor="email">Enter your email *</label>
                        <span>
                            <input 
                                type="email" 
                                placeholder='hello@avioflagos.io' 
                                id="email" 
                                name="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </span>
                    </div>

                    <div id='comment-input'>
                        <label htmlFor="comment">About the project</label>
                        <span>
                            <textarea placeholder='Send us a message' id="comment" name="comment" required />
                        </span>
                    </div>

                    <section id="buttons2">
                        <Link to="/ticketselect">
                            <button id="cancelbtn2" type="button">Cancel</button>
                        </Link>
                        <button id="nextbtn2" type="submit">Next</button>
                    </section>
                </form>
            </section>
        </>
    );
}
