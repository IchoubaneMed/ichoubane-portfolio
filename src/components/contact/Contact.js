import "./Contact.css";
import message from '../../images/message.png';

function Contact() {
    return (
        <div className="contact">
            <div className="contact_title">
                <h1>I'd love to hear from you.</h1>
            </div>
            <form className="contact_form">
            <img src={message} alt="message write logo" className="contact_form_img"/>
                <div className="contact_form_left">
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input id="name" type="text" placeholder="Enter Your Name" name="user_name" />

                    <label htmlFor="email">
                        Email:
                    </label>
                    <input id="email" type="email" placeholder="Enter Your Email" name="user_email" />
                    <label htmlFor="company">
                        Company/Organization:
                    </label>
                    <input id="company" type="text" placeholder="Enter Company Name" />
                </div>
                <div className="contact_form_right">
                    <label htmlFor="message">
                        Message:
                    </label>
                    <textarea id="message" placeholder="Enter Your Message" name="user_message" />

                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;