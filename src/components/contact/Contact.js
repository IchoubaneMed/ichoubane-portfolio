import "./Contact.css";
import message from '../../images/message.png';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_avra0zk', 'template_huyyew8', formRef.current, '-WonL7kcOIkCb063t')
            .then((result) => {
                setDone(true);
            }, (error) => {
                setDone(false);
            });
    }

    return (
        <div className="contact">
            <div className="contact_title">
                <h1>I'd love to hear from you.</h1>
            </div>
            <form className="contact_form" ref={formRef} onSubmit={handleSubmit}>
                <img src={message} alt="message write logo" className="contact_form_img" />
                <div className="contact_form_left">
                    <label htmlFor="name">
                        Name <span className="asterisk">*</span>
                    </label>
                    <input id="name" type="text" placeholder="Enter Your Name" name="user_name" required />

                    <label htmlFor="email">
                        Email <span className="asterisk">*</span>
                    </label>
                    <input id="email" type="email" placeholder="Enter Your Email" name="user_email" required />
                    <label htmlFor="subject">
                        Subject <span className="asterisk">*</span>
                    </label>
                    <input id="subject" type="text" placeholder="Enter Subject" name="user_subject" required />
                </div>
                <div className="contact_form_right">
                    <label htmlFor="message">
                        Message <span className="asterisk">*</span>
                    </label>
                    <textarea id="message" placeholder="Enter Your Message" name="user_message" required />

                    <button type="submit">Submit</button>
                    {done && 
                    <div className="notification">
                        The message has been sent successfully!
                    </div>
                    }
                    
                </div>
            </form>
        </div>
    );
}

export default Contact;