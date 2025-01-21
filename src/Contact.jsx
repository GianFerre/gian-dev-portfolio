function Contact() {
    return (
        <div className="parent-form">
            <div className="contact-form-container">
                <h1>Thank you for getting in touch. <br /> What can I do for you today?</h1>
                <form action="https://formspree.io/f/xdkkqvly" method="POST">
                    <div className="form-group">
                        <input name="name" placeholder="Name" required />
                        <input name="email" type="email" placeholder="Email" required />
                    </div>
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button className="form-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
